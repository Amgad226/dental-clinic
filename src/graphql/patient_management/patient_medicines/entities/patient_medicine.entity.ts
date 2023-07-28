import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientMedicine {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
