import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Problem {
  @Field(() => Int, { description: 'problem id' })
  id: number;

  @Field(() => String, { description: 'problem id' })
  name: string;

  @Field(() => Int, { description: 'problem id' })
  problem_type_id: number;

  // @Field(() => Int, { description: 'problem id' })
  // Problem_type: any;
}
