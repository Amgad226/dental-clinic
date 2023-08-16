import { Injectable } from '@nestjs/common';
import { CreatePatientSessionInput } from './dto/create-patient_session.input';
import { UpdatePatientSessionInput } from './dto/update-patient_session.input';

@Injectable()
export class PatientSessionsService {
  create(createPatientSessionInput: CreatePatientSessionInput) {
    return 'This action adds a new patientSession';
  }

  findAll() {
    return `This action returns all patientSessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientSession`;
  }

  update(id: number, updatePatientSessionInput: UpdatePatientSessionInput) {
    return `This action updates a #${id} patientSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientSession`;
  }
}
