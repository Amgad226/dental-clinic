import { Test, TestingModule } from '@nestjs/testing';
import { PatientTreatmentsService } from './patient_treatments.service';

describe('PatientTreatmentsService', () => {
  let service: PatientTreatmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTreatmentsService],
    }).compile();

    service = module.get<PatientTreatmentsService>(PatientTreatmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
