import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientAppointment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
