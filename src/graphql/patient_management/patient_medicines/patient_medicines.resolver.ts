import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientMedicinesService } from './patient_medicines.service';
import { PatientMedicine } from './entities/patient_medicine.entity';
import { CreatePatientMedicineInput } from './dto/create-patient_medicine.input';
import { UpdatePatientMedicineInput } from './dto/update-patient_medicine.input';

@Resolver(() => PatientMedicine)
export class PatientMedicinesResolver {
  constructor(private readonly patientMedicinesService: PatientMedicinesService) {}

  @Mutation(() => PatientMedicine)
  createPatientMedicine(@Args('createPatientMedicineInput') createPatientMedicineInput: CreatePatientMedicineInput) {
    return this.patientMedicinesService.create(createPatientMedicineInput);
  }

  @Query(() => [PatientMedicine], { name: 'patientMedicines' })
  findAll() {
    return this.patientMedicinesService.findAll();
  }

  @Query(() => PatientMedicine, { name: 'patientMedicine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientMedicinesService.findOne(id);
  }

  @Mutation(() => PatientMedicine)
  updatePatientMedicine(@Args('updatePatientMedicineInput') updatePatientMedicineInput: UpdatePatientMedicineInput) {
    return this.patientMedicinesService.update(updatePatientMedicineInput.id, updatePatientMedicineInput);
  }

  @Mutation(() => PatientMedicine)
  removePatientMedicine(@Args('id', { type: () => Int }) id: number) {
    return this.patientMedicinesService.remove(id);
  }
}
