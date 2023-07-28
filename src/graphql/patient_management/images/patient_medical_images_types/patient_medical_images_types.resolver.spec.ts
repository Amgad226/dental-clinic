import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicalImagesTypesResolver } from './patient_medical_images_types.resolver';
import { PatientMedicalImagesTypesService } from './patient_medical_images_types.service';

describe('PatientMedicalImagesTypesResolver', () => {
  let resolver: PatientMedicalImagesTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicalImagesTypesResolver, PatientMedicalImagesTypesService],
    }).compile();

    resolver = module.get<PatientMedicalImagesTypesResolver>(PatientMedicalImagesTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
