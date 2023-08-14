import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicalImagesResolver } from './patient_medical_images.resolver';
import { PatientMedicalImagesService } from './patient_medical_images.service';

describe('PatientMedicalImagesResolver', () => {
  let resolver: PatientMedicalImagesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicalImagesResolver, PatientMedicalImagesService],
    }).compile();

    resolver = module.get<PatientMedicalImagesResolver>(PatientMedicalImagesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
