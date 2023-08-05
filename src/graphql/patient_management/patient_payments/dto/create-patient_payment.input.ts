import { InputType, Field, Float , Int} from '@nestjs/graphql';

@InputType()
export class CreatePatientPaymentInput {
  @Field(() => Float)
  amount: number;

  @Field(() => Date)
  date: Date

  @Field(() => String)
  description?: string

  @Field(() => Int)
  patient_id: number
}
