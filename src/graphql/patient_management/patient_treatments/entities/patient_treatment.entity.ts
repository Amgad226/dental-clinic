import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientTreatment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
