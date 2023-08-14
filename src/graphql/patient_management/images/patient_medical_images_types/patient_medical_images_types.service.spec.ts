import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicalImagesTypesService } from './patient_medical_images_types.service';

describe('PatientMedicalImagesTypesService', () => {
  let service: PatientMedicalImagesTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicalImagesTypesService],
    }).compile();

    service = module.get<PatientMedicalImagesTypesService>(PatientMedicalImagesTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
