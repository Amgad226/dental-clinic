import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientPerscrptionsMediciensService } from './patient_perscrptions_mediciens.service';
import { PatientPerscrptionsMedicien } from './entities/patient_perscrptions_medicien.entity';
import { CreatePatientPerscrptionsMedicienInput } from './dto/create-patient_perscrptions_medicien.input';
import { UpdatePatientPerscrptionsMedicienInput } from './dto/update-patient_perscrptions_medicien.input';

@Resolver(() => PatientPerscrptionsMedicien)
export class PatientPerscrptionsMediciensResolver {
  constructor(private readonly patientPerscrptionsMediciensService: PatientPerscrptionsMediciensService) {}

  @Mutation(() => PatientPerscrptionsMedicien)
  createPatientPerscrptionsMedicien(@Args('createPatientPerscrptionsMedicienInput') createPatientPerscrptionsMedicienInput: CreatePatientPerscrptionsMedicienInput) {
    return this.patientPerscrptionsMediciensService.create(createPatientPerscrptionsMedicienInput);
  }

  @Query(() => [PatientPerscrptionsMedicien], { name: 'patientPerscrptionsMediciens' })
  findAll() {
    return this.patientPerscrptionsMediciensService.findAll();
  }

  @Query(() => PatientPerscrptionsMedicien, { name: 'patientPerscrptionsMedicien' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientPerscrptionsMediciensService.findOne(id);
  }

  @Mutation(() => PatientPerscrptionsMedicien)
  updatePatientPerscrptionsMedicien(@Args('updatePatientPerscrptionsMedicienInput') updatePatientPerscrptionsMedicienInput: UpdatePatientPerscrptionsMedicienInput) {
    return this.patientPerscrptionsMediciensService.update(updatePatientPerscrptionsMedicienInput.id, updatePatientPerscrptionsMedicienInput);
  }

  @Mutation(() => PatientPerscrptionsMedicien)
  removePatientPerscrptionsMedicien(@Args('id', { type: () => Int }) id: number) {
    return this.patientPerscrptionsMediciensService.remove(id);
  }
}
