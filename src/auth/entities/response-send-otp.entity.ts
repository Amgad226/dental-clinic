import { ObjectType } from '@nestjs/graphql';
import { Response } from 'src/global/response-entity';
import { SendOtp } from './send-otp.entity';


@ObjectType()
export class ResponseSendOtp extends Response(SendOtp) {}

