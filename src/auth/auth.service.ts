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

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private configService: ConfigService) { }

  async signup(signUpInput: SignUpInput): Promise<SignResponse> {
    const hashedPassword = await argon.hash(signUpInput.password)
    const user = await this.prisma.user.create({
      data: {
        email: signUpInput.email,
        hashedPassword,
        userName: signUpInput.userName,
      }
    })
    const { accessToken, refreshToken } = await this.createTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, refreshToken)

    return { accessToken, refreshToken, user }
  }

  async singin(singinInput: SignInInput): Promise<SignResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: singinInput.email }
    })
    if (!user) {
      throw new ForbiddenException('Credintails are not valid')
    }
    const isPasswordMatch = await argon.verify(user.hashedPassword, singinInput.password)
    if (!isPasswordMatch) {
      throw new ForbiddenException('Credintails are not valid')
    }
    const { accessToken, refreshToken } = await this.createTokens(user.id, user.email)
    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user }
  }

  async logout(userId: number): Promise<LogoutResponse> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: { not: null }
      },
      data: {
        hashedRefreshToken: null
      }
    })
    return { loggedOut: true }
  }
  async removeUser(userId: number) {
    // need to check if the user token is valid
    return await this.prisma.user.delete({ where: { id: userId } })
  }

  async createTokens(userId: number, email: string) {
    const accessToken = this.jwtService.sign({
      userId, email
    }, { expiresIn: '1d', secret: this.configService.get('ACCESS_TOKEN_SECRET') })
    const refreshToken = this.jwtService.sign({
      userId,
      email,
      accessToken,
    }, { expiresIn: '7d', secret: this.configService.get('REFRESH_TOKEN_SECRET') })

    return { refreshToken, accessToken }

  }
  async updateRefreshToken(userId: number, refreshToekn: string) {
    const hashedRefreshToken = await argon.hash(refreshToekn);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        hashedRefreshToken
      }
    })

  }
}
