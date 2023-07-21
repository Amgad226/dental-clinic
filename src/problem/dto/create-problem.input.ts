import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProblemInput {
  @Field(() => String, { description: 'problem name' })
  name: string;

  @Field(() => String, { description: 'problem name' })
  problem_type_id: number;
}
