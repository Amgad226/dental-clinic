import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Disease {

  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
