import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientPerscrptionsMedicienInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
