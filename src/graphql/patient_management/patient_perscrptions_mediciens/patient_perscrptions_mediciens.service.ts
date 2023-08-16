import { Injectable } from '@nestjs/common';
import { CreatePatientPerscrptionsMedicienInput } from './dto/create-patient_perscrptions_medicien.input';
import { UpdatePatientPerscrptionsMedicienInput } from './dto/update-patient_perscrptions_medicien.input';

@Injectable()
export class PatientPerscrptionsMediciensService {
  create(createPatientPerscrptionsMedicienInput: CreatePatientPerscrptionsMedicienInput) {
    return 'This action adds a new patientPerscrptionsMedicien';
  }

  findAll() {
    return `This action returns all patientPerscrptionsMediciens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientPerscrptionsMedicien`;
  }

  update(id: number, updatePatientPerscrptionsMedicienInput: UpdatePatientPerscrptionsMedicienInput) {
    return `This action updates a #${id} patientPerscrptionsMedicien`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientPerscrptionsMedicien`;
  }
}
