import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientSessionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
