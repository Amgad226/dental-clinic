import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientDesiseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
