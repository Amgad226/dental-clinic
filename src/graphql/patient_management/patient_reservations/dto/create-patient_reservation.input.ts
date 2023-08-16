import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientReservationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
