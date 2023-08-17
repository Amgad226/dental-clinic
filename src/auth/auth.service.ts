import { Injectable } from '@nestjs/common';
import { SignUpInput } from './dto/singup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import * as argon from 'argon2';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { LogoutResponse } from './dto/logout-response';
import { ApolloError } from 'apollo-server-express';
import { PhoneInput } from './dto/phone-input';
import { OtpService } from './otp.service';
import { CreateUserAccountInput } from './dto/create-user-account';
import { GraphQLError } from 'graphql';
import { CheckPhoneResponse } from './entities/check-phone.response';
import { SendOtpResponse } from './entities/send-otp.response';
import { CreateUserAccountResponse } from './entities/create-user-account.response';
import { LoginInput } from './dto/login-input';
import { AuthResponse } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly otpService: OtpService,
  ) {}

  async checkPhone(phoneInput: PhoneInput): Promise<CheckPhoneResponse> {
    let user = await this.prisma.user.findFirst({
      where: { phone: phoneInput.phone },
    });

    let patient = await this.prisma.patient.findFirst({
      where: { phone: phoneInput.phone },
    });

    if (user != null && patient != null) {
      return {
        data: {
          phoneHaveUserAccount: true,
          phoneHavePatient: true,
        },
        message: 'user account found, give me password  ',
        status: 200,
      };
    } else if (user == null && patient != null) {
      return {
        data: {
          phoneHaveUserAccount: false,
          phoneHavePatient: true,
        },
        message: 'patient found, give me otp then new password   ',
        status: 200,
      };
    } else {
      return {
        data: {
          phoneHaveUserAccount: false,
          phoneHavePatient: false,
        },
        message:
          'user account not found create account then verify your phone with otp',
        status: 200,
      };
    }
  }

  async sendOtp({ phone }: PhoneInput): Promise<SendOtpResponse> {
    const otp = this.otpService.generateOtpCode();

    await this.prisma.user.upsert({
      where: { phone },
      update: { otp },
      create: {
        phone,
        otp,
      },
    });

    const SEND_REAL_OTP = false;
    const sended = SEND_REAL_OTP
      ? await this.otpService.sendSMSVerifyCode({
          phone_number: phone,
          verify_code: otp,
          template: 'Your code is $$CODE$$, Thank you',
        })
      : true;

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

  async createUserAccount({
    password,
    phone,
    otp,
  }: CreateUserAccountInput): Promise<CreateUserAccountResponse> {
    const user = await this.prisma.user.findFirst({ where: { phone } });

    if (!user) {
      throw new GraphQLError('phone not found ', { extensions: { code: 404 } });
    }

    if (user.isVerified) {
      throw new GraphQLError('this account already created and is verified ', {
        extensions: { code: 400 },
      });
    }

    if (user.otp != otp) {
      throw new GraphQLError('Wrong otp', { extensions: { code: 400 } });
    }

    const hashedPassword = await argon.hash(password);
    await this.prisma.user.update({
      where: {
        phone,
      },
      data: {
        hashedPassword,
        isVerified: true,
      },
    });
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.phone,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      data: { accessToken, refreshToken, user },
      message: 'user verified successfully',
      status: 200,
    };
  }

  async login(loginInput: LoginInput) {

    const user = await this.prisma.user.findUnique({
      where: { phone: loginInput.phone },
    });
    if (!user) {
      throw new GraphQLError('User not found ', { extensions: { code: 404 } });
    }
    const isPasswordMatch = await argon.verify(
      user.hashedPassword,
      loginInput.password,
    );
    if (!isPasswordMatch) {
      throw new GraphQLError('Credintails are not valid', {
        extensions: { code: 403 },
      });
    }
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.phone,
    );
    await this.updateRefreshToken(user.id, refreshToken);
    
    return {
      data: { accessToken, refreshToken, user },
      message: 'login successfully',
      status: 200,
    };
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
        expiresIn: '1d',
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
