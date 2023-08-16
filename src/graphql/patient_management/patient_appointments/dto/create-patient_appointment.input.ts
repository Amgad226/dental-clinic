import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientAppointmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
