import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProblemType } from '@prisma/client';

@ObjectType()
export class Problem {
  @Field(() => Int, { description: 'problem id' })
  id: number;

  @Field(() => String, { description: 'problem id' })
  name: string;

  @Field(() => Int, { description: 'problem id' })
  problem_type: ProblemType;
}
