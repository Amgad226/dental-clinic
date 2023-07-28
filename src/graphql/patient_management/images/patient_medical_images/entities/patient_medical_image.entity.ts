import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientMedicalImage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
