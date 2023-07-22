import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/singup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignResponse } from './dto/sign-response';
import { SignInInput } from './dto/singin-input';
import { LogoutResponse } from './dto/logout-response';
import { Public } from './decorators/public.decorators';
import { NewTokenResponse } from './dto/newTokensResponse';
import { CurrentUserId } from './decorators/currentUserId.decorator';
import { CurrentUser } from './decorators/currentUser.decorator';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from './guards/refreshToken.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }
  @Public()
  @Mutation(() => SignResponse)
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  singin(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.singin(signInInput);
  }

  @Mutation(() => LogoutResponse)
  logout(@Args('userId') userId: number) {
    return this.authService.logout(userId);
  }

  @Mutation(() => Auth)
  reomveUser(@Args('id', { type: () => Int }) id: number) {
    return this.authService.removeUser(id);
  }
  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokenResponse)
  geNewTokens(
    @CurrentUserId() userId: number,
    @CurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.getNewTokens(userId, refreshToken)
  }
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
