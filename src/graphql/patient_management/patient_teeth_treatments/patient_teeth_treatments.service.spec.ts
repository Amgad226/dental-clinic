import { Test, TestingModule } from '@nestjs/testing';
import { PatientTeethTreatmentsService } from './patient_teeth_treatments.service';

describe('PatientTeethTreatmentsService', () => {
  let service: PatientTeethTreatmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientTeethTreatmentsService],
    }).compile();

    service = module.get<PatientTeethTreatmentsService>(PatientTeethTreatmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
