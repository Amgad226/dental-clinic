import { Injectable } from '@nestjs/common';
import { SignUpInput } from './dto/singup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import * as argon from 'argon2';
import { SignInInput } from './dto/singin-input';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { LogoutResponse } from './dto/logout-response';
import { SignResponse } from './dto/sign-response';
import { ApolloError } from 'apollo-server-express';
import { PhoneInput } from './dto/login-input';
import { OtpService } from './otp.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly otpService: OtpService,
  ) {}

  async checkPhone(phoneInput: PhoneInput): Promise<any> {
    let user = await this.prisma.user.findFirst({
      where: { phone: phoneInput.phone },
    });

    let patient = await this.prisma.patient.findFirst({
      where: { phone: phoneInput.phone },
    });

    if (user != null && patient != null) {
      return {
        data: {
          phoneExistsInUsers: true,
          phoneExistsInPatients: true,
        },
        message: 'user account found, give me password  ',
        status: 200,
      };
    } else if (user == null && patient != null) {
      return {
        data: {
          phoneExistsInUsers: false,
          phoneExistsInPatients: true,
        },
        message: 'patient found, give me otp then new password   ',
        status: 200,
      };
    } else {
      return {
        data: {
          phoneExistsInUsers: false,
          phoneExistsInPatients: false,
        },
        message:
          'user account not found create account then verify your phone with otp',
        status: 200,
      };
    }
  }

  async sendOtp(phoneInput: PhoneInput): Promise<any> {
    const otp = this.otpService.generateOtpCode();
    // const sended = await this.otpService.sendSMSVerifyCode({
    //   phone_number: phoneInput.phone,
    //   verify_code: otp,
    //   template: 'Your code is $$CODE$$, Thank you',
    // });

    const sended =true;

    return sended
      ? {
          data: { otp },
          message: `Your code is ${otp}, Thank you`,
          status: 200,
        }
      : {
          data: { otp },
          message: "otp doesn't sended successfully ",
          status: 400,
        };
  }

  async signup(signUpInput: SignUpInput): Promise<SignResponse> {
    const hashedPassword = await argon.hash(signUpInput.password);
    const user = await this.prisma.user.create({
      data: {
        phone: signUpInput.phone,
        hashedPassword,
        userName: signUpInput.userName,
        isVerified: true,
        patient: {
          connect: { id: signUpInput.patientId },
        },
      },
    });
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.phone,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }
  async singin(singinInput: SignInInput): Promise<SignResponse> {
    const user = await this.prisma.user.findUnique({
      where: { phone: singinInput.phone },
    });
    if (!user) {
      throw new ForbiddenException('Credintails are not valid');
    }
    const isPasswordMatch = await argon.verify(
      user.hashedPassword,
      singinInput.password,
    );
    if (!isPasswordMatch) {
      throw new ForbiddenException('Credintails are not valid');
    }
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.phone,
    );
    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }
  async logout(userId: number): Promise<LogoutResponse> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: { not: null },
      },
      data: {
        hashedRefreshToken: null,
      },
    });
    return { loggedOut: true };
  }
  async removeUser(userId: number) {
    // need to check if the user token is valid
    return await this.prisma.user.delete({ where: { id: userId } });
  }
  async createTokens(userId: number, phone: string) {
    const accessToken = this.jwtService.sign(
      {
        userId,
        phone,
      },
      {
        expiresIn: '60s',
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      },
    );
    const refreshToken = this.jwtService.sign(
      {
        userId,
        phone,
        accessToken,
      },
      {
        expiresIn: '7d',
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      },
    );

    return { refreshToken, accessToken };
  }
  async updateRefreshToken(userId: number, refreshToekn: string) {
    const hashedRefreshToken = await argon.hash(refreshToekn);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        hashedRefreshToken,
      },
    });
  }
  async getNewTokens(userId: number, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new ForbiddenException('Access Denied');
    }
    const isRefreshTokenMatch = await argon.verify(user.hashedRefreshToken, rt);
    if (!isRefreshTokenMatch) {
      throw new ForbiddenException('Access Denied');
    }
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.phone,
    );
    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }
}
