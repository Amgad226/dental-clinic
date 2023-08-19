import { Test, TestingModule } from '@nestjs/testing';
import { PatientPerscrptionsMediciensResolver } from './patient_perscrptions_mediciens.resolver';
import { PatientPerscrptionsMediciensService } from './patient_perscrptions_mediciens.service';

describe('PatientPerscrptionsMediciensResolver', () => {
  let resolver: PatientPerscrptionsMediciensResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPerscrptionsMediciensResolver, PatientPerscrptionsMediciensService],
    }).compile();

    resolver = module.get<PatientPerscrptionsMediciensResolver>(PatientPerscrptionsMediciensResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
