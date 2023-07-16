import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BadHabit {
  @Field(() => Int)
  id: number;

  @Field()
  name: String;
}
