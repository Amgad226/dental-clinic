import { InputType, Int, Field } from '@nestjs/graphql';
import { CreatePatientTreatmentDoneStepInput } from '../../patient_treatment_done_steps/dto/create-patient_treatment_done_step.input';
import { CreatePatientPerscrptionInput } from '../../patient_perscrptions/dto/create-patient_perscrption.input';
import { CreatePatientLabOrderInput } from '../../patient_lab_orders/dto/create-patient_lab_order.input';

@InputType()
export class CreatePatientSessionInput {
  @Field(() => Int)
  patient_id: number;

  @Field(() => Int)
  patiient_appointment_id: number;

  @Field(() => [CreatePatientTreatmentDoneStepInput])
  createPatientTreatmentDoneStepInput: CreatePatientTreatmentDoneStepInput[];

  @Field(() => CreatePatientPerscrptionInput, { nullable: true })
  createPatientPerscrptionInput?: CreatePatientPerscrptionInput;

  @Field(() => CreatePatientLabOrderInput, { nullable: true })
  createPatientLabOrderInput?: CreatePatientLabOrderInput;
}
