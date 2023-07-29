import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArrayOfPatientBadHabitInput {
  @Field(() => Int)
  patient_id: number

  @Field(() => [CreatePatientBadHabitInput])
  bad_habits: CreatePatientBadHabitInput[]

}

@InputType()
export class CreatePatientBadHabitInput {
  @Field(() => Int)
  bad_habet_id: number

  @Field(() => String, { nullable: true })
  notes?: string
}