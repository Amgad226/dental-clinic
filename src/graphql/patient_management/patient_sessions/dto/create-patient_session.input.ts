import { InputType, Int, Field } from '@nestjs/graphql';
import { CreatePatientTreatmentDoneStepInput } from '../../patient_treatment_done_steps/dto/create-patient_treatment_done_step.input';

@InputType()
export class CreatePatientSessionInput {
  @Field(() => Int)
  patient_id: number;

  @Field(() => Int)
  patiient_appointment_id: number;

  @Field(() => [CreatePatientTreatmentDoneStepInput])
  createPatientTreatmentDoneStepInput: CreatePatientTreatmentDoneStepInput[];
}
