import { Test, TestingModule } from '@nestjs/testing';
import { PatientCostsResolver } from './patient_costs.resolver';
import { PatientCostsService } from './patient_costs.service';

describe('PatientCostsResolver', () => {
  let resolver: PatientCostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientCostsResolver, PatientCostsService],
    }).compile();

    resolver = module.get<PatientCostsResolver>(PatientCostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
