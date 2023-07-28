import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientCostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
