import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientDesisesService } from './patient_desises.service';
import { PatientDesise } from './entities/patient_desise.entity';
import { CreatePatientDesiseInput } from './dto/create-patient_desise.input';
import { UpdatePatientDesiseInput } from './dto/update-patient_desise.input';

@Resolver(() => PatientDesise)
export class PatientDesisesResolver {
  constructor(private readonly patientDesisesService: PatientDesisesService) {}

  @Mutation(() => PatientDesise)
  createPatientDesise(@Args('createPatientDesiseInput') createPatientDesiseInput: CreatePatientDesiseInput) {
    return this.patientDesisesService.create(createPatientDesiseInput);
  }

  @Query(() => [PatientDesise], { name: 'patientDesises' })
  findAll() {
    return this.patientDesisesService.findAll();
  }

  @Query(() => PatientDesise, { name: 'patientDesise' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientDesisesService.findOne(id);
  }

  @Mutation(() => PatientDesise)
  updatePatientDesise(@Args('updatePatientDesiseInput') updatePatientDesiseInput: UpdatePatientDesiseInput) {
    return this.patientDesisesService.update(updatePatientDesiseInput.id, updatePatientDesiseInput);
  }

  @Mutation(() => PatientDesise)
  removePatientDesise(@Args('id', { type: () => Int }) id: number) {
    return this.patientDesisesService.remove(id);
  }
}
