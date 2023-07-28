import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientBadHabit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
