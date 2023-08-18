import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { OtpService } from './otp.service';
@Module({
  providers: [OtpService,ConfigService,AuthResolver, AuthService, JwtService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule { } 
