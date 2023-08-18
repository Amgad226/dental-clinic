import { ObjectType } from '@nestjs/graphql';
import { Response } from 'src/global/response-entity';
import { CreateUserAccount } from './create-user-account.entity';


@ObjectType()
export class AuthResponse extends Response(CreateUserAccount) {}

