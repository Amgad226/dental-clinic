import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  userName: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  @Field()
  password: string

}
