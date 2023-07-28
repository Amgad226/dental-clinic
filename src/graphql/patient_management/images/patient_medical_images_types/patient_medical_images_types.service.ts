import { Injectable } from '@nestjs/common';
import { CreatePatientMedicalImagesTypeInput } from './dto/create-patient_medical_images_type.input';
import { UpdatePatientMedicalImagesTypeInput } from './dto/update-patient_medical_images_type.input';

@Injectable()
export class PatientMedicalImagesTypesService {
  create(createPatientMedicalImagesTypeInput: CreatePatientMedicalImagesTypeInput) {
    return 'This action adds a new patientMedicalImagesType';
  }

  findAll() {
    return `This action returns all patientMedicalImagesTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientMedicalImagesType`;
  }

  update(id: number, updatePatientMedicalImagesTypeInput: UpdatePatientMedicalImagesTypeInput) {
    return `This action updates a #${id} patientMedicalImagesType`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientMedicalImagesType`;
  }
}
