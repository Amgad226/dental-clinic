import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientLabOrderFromSessionInput {
  @Field(() => Int)
  lab_order_id: number;

  @Field(() => Int)
  patient_id: number;
}
