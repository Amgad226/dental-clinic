import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientBadHabit {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  patient_id: number

  @Field(() => Int)
  bad_habet_id: number

  @Field(() => String, { nullable: true })
  notes?: string
}
