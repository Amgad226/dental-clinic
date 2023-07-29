import { InputType, Int, Field } from '@nestjs/graphql';

// @InputType()
// export class CreatePatientMedicineInput {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }


@InputType()
export class CreateArrayOfPatientMedicineInput {
  @Field(() => Int)
  patient_id: number

  @Field(() => [CreatePatientMedicineInput])
  medicines: CreatePatientMedicineInput[]

}

@InputType()
export class CreatePatientMedicineInput {
  @Field(() => Int)
  medicine_id: number

  @Field(() => String, { nullable: true })
  notes?: string
}