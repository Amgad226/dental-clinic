import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArrayofPatientDiseaseInput {
  @Field(() => Int)
  patient_id: number

  @Field(() => [CreatePatientDiseaseInput])
  diseases: CreatePatientDiseaseInput[]
}

@InputType()
export class CreatePatientDiseaseInput {
  @Field(() => Int)
  disease_id: number

  @Field(() => Boolean)
  tight: boolean;

  @Field(() => String, { nullable: true })
  notes?: string
}