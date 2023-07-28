import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientDesise {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
