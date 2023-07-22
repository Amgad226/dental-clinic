import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProblemInput {
  @Field(() => String, { description: 'problem name' })
  name: string;

  @Field(() => Int, { description: 'problem name' })
  problem_type_id: number;
}
