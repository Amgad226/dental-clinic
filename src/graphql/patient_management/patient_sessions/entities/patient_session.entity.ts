import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientSession {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
