import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientMedicalImagesTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
