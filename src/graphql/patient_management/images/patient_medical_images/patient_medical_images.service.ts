import { Injectable } from '@nestjs/common';
import { CreatePatientMedicalImageInput } from './dto/create-patient_medical_image.input';
import { UpdatePatientMedicalImageInput } from './dto/update-patient_medical_image.input';

@Injectable()
export class PatientMedicalImagesService {
  create(createPatientMedicalImageInput: CreatePatientMedicalImageInput) {
    return 'This action adds a new patientMedicalImage';
  }

  findAll() {
    return `This action returns all patientMedicalImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientMedicalImage`;
  }

  update(id: number, updatePatientMedicalImageInput: UpdatePatientMedicalImageInput) {
    return `This action updates a #${id} patientMedicalImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientMedicalImage`;
  }
}
