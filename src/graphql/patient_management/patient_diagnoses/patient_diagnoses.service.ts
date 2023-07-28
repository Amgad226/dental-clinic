import { Injectable } from '@nestjs/common';
import { CreatePatientDiagnosisInput } from './dto/create-patient_diagnosis.input';
import { UpdatePatientDiagnosisInput } from './dto/update-patient_diagnosis.input';

@Injectable()
export class PatientDiagnosesService {
  create(createPatientDiagnosisInput: CreatePatientDiagnosisInput) {
    return 'This action adds a new patientDiagnosis';
  }

  findAll() {
    return `This action returns all patientDiagnoses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientDiagnosis`;
  }

  update(id: number, updatePatientDiagnosisInput: UpdatePatientDiagnosisInput) {
    return `This action updates a #${id} patientDiagnosis`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientDiagnosis`;
  }
}
