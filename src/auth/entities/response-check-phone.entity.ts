import { ObjectType } from '@nestjs/graphql';
import { CheckPhone } from './check-phone.entity';
import { Response } from 'src/global/response-entity';


@ObjectType()
export class ResponseCheckPhone extends Response(CheckPhone) {}

