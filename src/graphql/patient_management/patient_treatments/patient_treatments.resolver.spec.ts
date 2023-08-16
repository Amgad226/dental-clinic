import { Test, TestingModule } from '@nestjs/testing';
import { PatientTreatmentsResolver } from './patient_treatments.resolver';
import { PatientTreatmentsService } from './patient_treatments.service';

describe('PatientTreatmentsResolver', () => {
  let resolver: PatientTreatmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTreatmentsResolver, PatientTreatmentsService],
    }).compile();

    resolver = module.get<PatientTreatmentsResolver>(PatientTreatmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
