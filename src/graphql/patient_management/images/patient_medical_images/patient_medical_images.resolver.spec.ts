import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ImagesUploaderService } from '../../../../images_uploader/images_uploader.service';
import { PatientMedicalImagesResolver } from './patient_medical_images.resolver';
import { PatientMedicalImagesService } from './patient_medical_images.service';


describe('PatientMedicalImagesResolver', () => {
  let resolver: PatientMedicalImagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicalImagesResolver, PatientMedicalImagesService, PrismaService, ImagesUploaderService],
    }).compile();

    resolver = module.get<PatientMedicalImagesResolver>(PatientMedicalImagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
