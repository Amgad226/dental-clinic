import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientDiagnosesService } from './patient_diagnoses.service';
import { PatientDiagnosis } from './entities/patient_diagnosis.entity';
import { CreatePatientDiagnosisInput } from './dto/create-patient_diagnosis.input';
import { UpdatePatientDiagnosisInput } from './dto/update-patient_diagnosis.input';

@Resolver(() => PatientDiagnosis)
export class PatientDiagnosesResolver {
  constructor(private readonly patientDiagnosesService: PatientDiagnosesService) {}

  @Mutation(() => PatientDiagnosis)
  createPatientDiagnosis(@Args('createPatientDiagnosisInput') createPatientDiagnosisInput: CreatePatientDiagnosisInput) {
    return this.patientDiagnosesService.create(createPatientDiagnosisInput);
  }

  @Query(() => [PatientDiagnosis], { name: 'patientDiagnoses' })
  findAll() {
    return this.patientDiagnosesService.findAll();
  }

  @Query(() => PatientDiagnosis, { name: 'patientDiagnosis' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientDiagnosesService.findOne(id);
  }

  @Mutation(() => PatientDiagnosis)
  updatePatientDiagnosis(@Args('updatePatientDiagnosisInput') updatePatientDiagnosisInput: UpdatePatientDiagnosisInput) {
    return this.patientDiagnosesService.update(updatePatientDiagnosisInput.id, updatePatientDiagnosisInput);
  }

  @Mutation(() => PatientDiagnosis)
  removePatientDiagnosis(@Args('id', { type: () => Int }) id: number) {
    return this.patientDiagnosesService.remove(id);
  }
}
