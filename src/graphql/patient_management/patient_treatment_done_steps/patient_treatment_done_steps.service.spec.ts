import { Test, TestingModule } from '@nestjs/testing';
import { PatientTreatmentDoneStepsService } from './patient_treatment_done_steps.service';

describe('PatientTreatmentDoneStepsService', () => {
  let service: PatientTreatmentDoneStepsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTreatmentDoneStepsService],
    }).compile();

    service = module.get<PatientTreatmentDoneStepsService>(PatientTreatmentDoneStepsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
