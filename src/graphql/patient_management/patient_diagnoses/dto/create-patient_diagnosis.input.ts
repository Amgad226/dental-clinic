import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientDiagnosisInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
