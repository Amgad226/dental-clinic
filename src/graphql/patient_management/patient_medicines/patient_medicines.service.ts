import { Injectable } from '@nestjs/common';
import { CreatePatientMedicineInput } from './dto/create-patient_medicine.input';
import { UpdatePatientMedicineInput } from './dto/update-patient_medicine.input';

@Injectable()
export class PatientMedicinesService {
  create(createPatientMedicineInput: CreatePatientMedicineInput) {
    return 'This action adds a new patientMedicine';
  }

  findAll() {
    return `This action returns all patientMedicines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientMedicine`;
  }

  update(id: number, updatePatientMedicineInput: UpdatePatientMedicineInput) {
    return `This action updates a #${id} patientMedicine`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientMedicine`;
  }
}
