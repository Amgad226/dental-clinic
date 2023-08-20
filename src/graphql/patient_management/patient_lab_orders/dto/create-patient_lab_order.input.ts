import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientLabOrderInput {
  @Field(() => Int)
  patient_session_id: number;

  @Field(() => Int)
  lab_order_id: number;

  @Field(() => Int)
  patient_id: number;
}
