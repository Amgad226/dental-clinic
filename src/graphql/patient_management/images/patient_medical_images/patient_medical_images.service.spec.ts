import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicalImagesService } from './patient_medical_images.service';

describe('PatientMedicalImagesService', () => {
  let service: PatientMedicalImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicalImagesService],
    }).compile();

    service = module.get<PatientMedicalImagesService>(PatientMedicalImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
