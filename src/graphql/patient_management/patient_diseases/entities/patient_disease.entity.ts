import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientDisease {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  disease_id: number

  @Field(() => Int)
  patient_id: number

  @Field(() => Boolean)
  tight: boolean;

  @Field(() => String, { nullable: true })
  notes?: string

}
