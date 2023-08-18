import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './entities/auth.entity';
import { SignUpInput } from './dto/singup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { LogoutResponse } from './dto/logout-response';
import { Public } from './decorators/public.decorators';
import { NewTokenResponse } from './dto/newTokensResponse';
import { CurrentUserId } from './decorators/currentUserId.decorator';
import { CurrentUser } from './decorators/currentUser.decorator';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from './guards/refreshToken.guard';
import { PhoneInput } from './dto/phone-input';
import { CheckPhone } from './entities/check-phone.entity';
import { CheckPhoneResponse } from './entities/check-phone.response';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'src/global/response-entity';
import { SendOtpResponse } from './entities/send-otp.response';
import { CreateUserAccountInput } from './dto/create-user-account';
import { CreateUserAccountResponse } from './entities/create-user-account.response';
import { LoginInput } from './dto/login-input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => CheckPhoneResponse, { name: 'CheckPhone' })
  checkPhone(@Args('checkPhoneInput') checkPhoneInput: PhoneInput) {
    return this.authService.checkPhone(checkPhoneInput);
  }

  @Public()
  @Mutation(() => SendOtpResponse, { name: 'SendOtp' })
  sendOtp(@Args('checkPhoneInput') checkPhoneInput: PhoneInput) {
    return this.authService.sendOtp(checkPhoneInput);
  }

  @Public()
  @Mutation(() => AuthResponse, { name: 'createUserAccount' })
  createUserAccount(
    @Args('checkPhoneInput') createUserAccountInput: CreateUserAccountInput,
  ) {
    return this.authService.createUserAccount(createUserAccountInput);
  }


  @Public()
  @Mutation(() => AuthResponse, { name: 'login' })
  login(@Args('loginInput') loginInput: LoginInput
  ) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => LogoutResponse)
  logout(@Args('userId') userId: number) {
    return this.authService.logout(userId);
  }

  // @Mutation(() => Auth)
  // reomveUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.removeUser(id);
  // }



  // @Public()
  // @UseGuards(RefreshTokenGuard)
  // @Mutation(() => NewTokenResponse)
  // geNewTokens(
  //   @CurrentUserId() userId: number,
  //   @CurrentUser('refreshToken') refreshToken: string,
  // ) {
  //   return this.authService.getNewTokens(userId, refreshToken);
  // }



  // @Query(() => [Auth], { name: 'auth' })
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Query(() => Auth, { name: 'auth' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.findOne(id);
  // }

  // @Mutation(() => Auth)
  // updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
  //   return this.authService.update(updateAuthInput.id, updateAuthInput);
  // }
}
