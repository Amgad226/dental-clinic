import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientTreatmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
