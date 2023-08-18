import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user-entity";
import { IsNotEmpty, IsString } from 'class-validator'

@ObjectType()
export class CreateUserAccount {
    @IsNotEmpty()
    @IsString()
    @Field()
    accessToken: string;

    @Field()
    refreshToken: string;

    @Field(() => User)
    user: User;

}

