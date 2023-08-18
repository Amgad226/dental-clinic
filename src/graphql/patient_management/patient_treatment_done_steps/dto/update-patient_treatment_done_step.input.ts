import { CreatePatientTreatmentDoneStepInput } from './create-patient_treatment_done_step.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientTreatmentDoneStepInput extends PartialType(CreatePatientTreatmentDoneStepInput) {
  @Field(() => Int)
  id: number;
}
