import { Module } from '@nestjs/common';
import { PatientMedicalImagesService } from './patient_medical_images.service';
import { PatientMedicalImagesResolver } from './patient_medical_images.resolver';
import { ImagesUploaderService } from 'src/images_uploader/images_uploader.service';

@Module({
  providers: [PatientMedicalImagesResolver, PatientMedicalImagesService, ImagesUploaderService]
})
export class PatientMedicalImagesModule { }
