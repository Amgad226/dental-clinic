import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientTreatmentsService } from './patient_treatments.service';
import { PatientTreatment } from './entities/patient_treatment.entity';
import { CreatePatientTreatmentInput } from './dto/create-patient_treatment.input';
import { UpdatePatientTreatmentInput } from './dto/update-patient_treatment.input';

@Resolver(() => PatientTreatment)
export class PatientTreatmentsResolver {
  constructor(private readonly patientTreatmentsService: PatientTreatmentsService) {}

  @Mutation(() => PatientTreatment)
  createPatientTreatment(@Args('createPatientTreatmentInput') createPatientTreatmentInput: CreatePatientTreatmentInput) {
    return this.patientTreatmentsService.create(createPatientTreatmentInput);
  }

  @Query(() => [PatientTreatment], { name: 'patientTreatments' })
  findAll() {
    return this.patientTreatmentsService.findAll();
  }

  @Query(() => PatientTreatment, { name: 'patientTreatment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientTreatmentsService.findOne(id);
  }

  @Mutation(() => PatientTreatment)
  updatePatientTreatment(@Args('updatePatientTreatmentInput') updatePatientTreatmentInput: UpdatePatientTreatmentInput) {
    return this.patientTreatmentsService.update(updatePatientTreatmentInput.id, updatePatientTreatmentInput);
  }

  @Mutation(() => PatientTreatment)
  removePatientTreatment(@Args('id', { type: () => Int }) id: number) {
    return this.patientTreatmentsService.remove(id);
  }
}
