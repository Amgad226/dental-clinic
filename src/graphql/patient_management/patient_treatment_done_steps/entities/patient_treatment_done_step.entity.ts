import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientTreatmentDoneStep {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
