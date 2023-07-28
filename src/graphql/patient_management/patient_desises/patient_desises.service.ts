import { Injectable } from '@nestjs/common';
import { CreatePatientDesiseInput } from './dto/create-patient_desise.input';
import { UpdatePatientDesiseInput } from './dto/update-patient_desise.input';

@Injectable()
export class PatientDesisesService {
  create(createPatientDesiseInput: CreatePatientDesiseInput) {
    return 'This action adds a new patientDesise';
  }

  findAll() {
    return `This action returns all patientDesises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientDesise`;
  }

  update(id: number, updatePatientDesiseInput: UpdatePatientDesiseInput) {
    return `This action updates a #${id} patientDesise`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientDesise`;
  }
}
