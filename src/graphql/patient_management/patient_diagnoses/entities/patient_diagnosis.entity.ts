import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientDiagnosis {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
