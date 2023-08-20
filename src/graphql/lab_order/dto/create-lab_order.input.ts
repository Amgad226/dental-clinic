import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabOrderInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  lab_id: number;


  @Field(() => [String])
  steps_names: string[];


}
