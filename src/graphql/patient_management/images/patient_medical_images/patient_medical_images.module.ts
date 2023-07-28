import { Module } from '@nestjs/common';
import { PatientMedicalImagesService } from './patient_medical_images.service';
import { PatientMedicalImagesResolver } from './patient_medical_images.resolver';

@Module({
  providers: [PatientMedicalImagesResolver, PatientMedicalImagesService]
})
export class PatientMedicalImagesModule {}
