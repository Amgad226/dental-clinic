import { Test, TestingModule } from '@nestjs/testing';
import { PatientTeethTreatmentsResolver } from './patient_teeth_treatments.resolver';
import { PatientTeethTreatmentsService } from './patient_teeth_treatments.service';

describe('PatientTeethTreatmentsResolver', () => {
  let resolver: PatientTeethTreatmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTeethTreatmentsResolver, PatientTeethTreatmentsService],
    }).compile();

    resolver = module.get<PatientTeethTreatmentsResolver>(PatientTeethTreatmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
