import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientReservation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
