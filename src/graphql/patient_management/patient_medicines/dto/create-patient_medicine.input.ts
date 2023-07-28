import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientMedicineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
