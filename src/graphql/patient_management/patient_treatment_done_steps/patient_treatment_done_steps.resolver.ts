import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientTreatmentDoneStepsService } from './patient_treatment_done_steps.service';
import { PatientTreatmentDoneStep } from './entities/patient_treatment_done_step.entity';
import { CreatePatientTreatmentDoneStepInput } from './dto/create-patient_treatment_done_step.input';
import { UpdatePatientTreatmentDoneStepInput } from './dto/update-patient_treatment_done_step.input';

@Resolver(() => PatientTreatmentDoneStep)
export class PatientTreatmentDoneStepsResolver {
  constructor(private readonly patientTreatmentDoneStepsService: PatientTreatmentDoneStepsService) {}

  @Mutation(() => PatientTreatmentDoneStep)
  createPatientTreatmentDoneStep(@Args('createPatientTreatmentDoneStepInput') createPatientTreatmentDoneStepInput: CreatePatientTreatmentDoneStepInput) {
    return this.patientTreatmentDoneStepsService.create(createPatientTreatmentDoneStepInput);
  }

  @Query(() => [PatientTreatmentDoneStep], { name: 'patientTreatmentDoneSteps' })
  findAll() {
    return this.patientTreatmentDoneStepsService.findAll();
  }

  @Query(() => PatientTreatmentDoneStep, { name: 'patientTreatmentDoneStep' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientTreatmentDoneStepsService.findOne(id);
  }

  @Mutation(() => PatientTreatmentDoneStep)
  updatePatientTreatmentDoneStep(@Args('updatePatientTreatmentDoneStepInput') updatePatientTreatmentDoneStepInput: UpdatePatientTreatmentDoneStepInput) {
    return this.patientTreatmentDoneStepsService.update(updatePatientTreatmentDoneStepInput.id, updatePatientTreatmentDoneStepInput);
  }

  @Mutation(() => PatientTreatmentDoneStep)
  removePatientTreatmentDoneStep(@Args('id', { type: () => Int }) id: number) {
    return this.patientTreatmentDoneStepsService.remove(id);
  }
}
