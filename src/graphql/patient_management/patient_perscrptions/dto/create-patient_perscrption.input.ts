import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientPerscrptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
