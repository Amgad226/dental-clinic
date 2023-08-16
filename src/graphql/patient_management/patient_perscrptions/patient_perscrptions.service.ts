import { Injectable } from '@nestjs/common';
import { CreatePatientPerscrptionInput } from './dto/create-patient_perscrption.input';
import { UpdatePatientPerscrptionInput } from './dto/update-patient_perscrption.input';

@Injectable()
export class PatientPerscrptionsService {
  create(createPatientPerscrptionInput: CreatePatientPerscrptionInput) {
    return 'This action adds a new patientPerscrption';
  }

  findAll() {
    return `This action returns all patientPerscrptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientPerscrption`;
  }

  update(id: number, updatePatientPerscrptionInput: UpdatePatientPerscrptionInput) {
    return `This action updates a #${id} patientPerscrption`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientPerscrption`;
  }
}
