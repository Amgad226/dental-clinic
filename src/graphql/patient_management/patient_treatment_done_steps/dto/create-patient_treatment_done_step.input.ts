import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientTreatmentDoneStepInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
