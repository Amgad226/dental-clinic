import { Test, TestingModule } from '@nestjs/testing';
import { PatientCostsService } from './patient_costs.service';

describe('PatientCostsService', () => {
  let service: PatientCostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientCostsService],
    }).compile();

    service = module.get<PatientCostsService>(PatientCostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
