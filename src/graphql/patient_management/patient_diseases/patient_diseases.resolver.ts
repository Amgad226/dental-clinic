import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientDiseasesService } from './patient_diseases.service';
import { PatientDisease } from './entities/patient_disease.entity';
import { CreatePatientDiseaseInput } from './dto/create-patient_disease.input';
import { UpdatePatientDiseaseInput } from './dto/update-patient_disease.input';

@Resolver(() => PatientDisease)
export class PatientDiseasesResolver {
  constructor(private readonly patientDiseasesService: PatientDiseasesService) { }

  // @Mutation(() => PatientDisease)
  // createPatientDisease(@Args('createPatientDiseaseInput') createPatientDiseaseInput: CreatePatientDiseaseInput) {
  // return this.patientDiseasesService.create(createPatientDiseaseInput);
  // }

  @Query(() => [PatientDisease], { name: 'patientDiseases' })
  findAll() {
    return this.patientDiseasesService.findAll();
  }

  @Query(() => PatientDisease, { name: 'patientDisease' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientDiseasesService.findOne(id);
  }

  @Mutation(() => PatientDisease)
  updatePatientDisease(@Args('updatePatientDiseaseInput') updatePatientDiseaseInput: UpdatePatientDiseaseInput) {
    return this.patientDiseasesService.update(updatePatientDiseaseInput.id, updatePatientDiseaseInput);
  }

  @Mutation(() => PatientDisease)
  removePatientDisease(@Args('id', { type: () => Int }) id: number) {
    return this.patientDiseasesService.remove(id);
  }
}
