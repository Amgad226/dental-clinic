import { CreatePatientMedicineInput } from './create-patient_medicine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientMedicineInput extends PartialType(CreatePatientMedicineInput) {
  @Field(() => Int)
  id: number;
}
