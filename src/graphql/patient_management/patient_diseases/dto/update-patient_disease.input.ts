import { CreatePatientDiseaseInput } from './create-patient_disease.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientDiseaseInput extends PartialType(CreatePatientDiseaseInput) {
  @Field(() => Int)
  id: number;
}
