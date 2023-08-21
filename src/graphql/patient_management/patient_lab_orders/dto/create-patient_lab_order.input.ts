import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientLabOrderInput {
  @Field(() => Int)
  patient_session_id: number;

  @Field(() => Int)
  lab_order_id: number;

  @Field(() => Int)
  patient_id: number;


  @Field(() => String)
  type: string;

  @Field(() => String)
  degree: string;

  @Field(() => String)
  directions: string;

  @Field(() => Date)
  created_at: Date;
  
  @Field(() => [String])
  notation: string[];


}
