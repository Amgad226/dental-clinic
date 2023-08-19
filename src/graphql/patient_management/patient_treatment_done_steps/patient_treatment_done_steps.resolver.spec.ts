import { Test, TestingModule } from '@nestjs/testing';
import { PatientTreatmentDoneStepsResolver } from './patient_treatment_done_steps.resolver';
import { PatientTreatmentDoneStepsService } from './patient_treatment_done_steps.service';

describe('PatientTreatmentDoneStepsResolver', () => {
  let resolver: PatientTreatmentDoneStepsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTreatmentDoneStepsResolver, PatientTreatmentDoneStepsService],
    }).compile();

    resolver = module.get<PatientTreatmentDoneStepsResolver>(PatientTreatmentDoneStepsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
