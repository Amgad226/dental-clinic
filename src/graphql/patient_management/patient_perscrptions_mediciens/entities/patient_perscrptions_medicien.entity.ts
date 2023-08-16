import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientPerscrptionsMedicien {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
