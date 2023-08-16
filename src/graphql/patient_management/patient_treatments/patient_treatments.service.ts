import { Injectable } from '@nestjs/common';
import { CreatePatientTreatmentInput } from './dto/create-patient_treatment.input';
import { UpdatePatientTreatmentInput } from './dto/update-patient_treatment.input';

@Injectable()
export class PatientTreatmentsService {
  create(createPatientTreatmentInput: CreatePatientTreatmentInput) {
    return 'This action adds a new patientTreatment';
  }

  findAll() {
    return `This action returns all patientTreatments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientTreatment`;
  }

  update(id: number, updatePatientTreatmentInput: UpdatePatientTreatmentInput) {
    return `This action updates a #${id} patientTreatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientTreatment`;
  }
}
