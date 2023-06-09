import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Disease {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
