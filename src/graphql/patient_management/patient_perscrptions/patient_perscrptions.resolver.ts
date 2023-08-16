import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientPerscrptionsService } from './patient_perscrptions.service';
import { PatientPerscrption } from './entities/patient_perscrption.entity';
import { CreatePatientPerscrptionInput } from './dto/create-patient_perscrption.input';
import { UpdatePatientPerscrptionInput } from './dto/update-patient_perscrption.input';

@Resolver(() => PatientPerscrption)
export class PatientPerscrptionsResolver {
  constructor(private readonly patientPerscrptionsService: PatientPerscrptionsService) {}

  @Mutation(() => PatientPerscrption)
  createPatientPerscrption(@Args('createPatientPerscrptionInput') createPatientPerscrptionInput: CreatePatientPerscrptionInput) {
    return this.patientPerscrptionsService.create(createPatientPerscrptionInput);
  }

  @Query(() => [PatientPerscrption], { name: 'patientPerscrptions' })
  findAll() {
    return this.patientPerscrptionsService.findAll();
  }

  @Query(() => PatientPerscrption, { name: 'patientPerscrption' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientPerscrptionsService.findOne(id);
  }

  @Mutation(() => PatientPerscrption)
  updatePatientPerscrption(@Args('updatePatientPerscrptionInput') updatePatientPerscrptionInput: UpdatePatientPerscrptionInput) {
    return this.patientPerscrptionsService.update(updatePatientPerscrptionInput.id, updatePatientPerscrptionInput);
  }

  @Mutation(() => PatientPerscrption)
  removePatientPerscrption(@Args('id', { type: () => Int }) id: number) {
    return this.patientPerscrptionsService.remove(id);
  }
}
