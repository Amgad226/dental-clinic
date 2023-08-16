import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientLabOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
