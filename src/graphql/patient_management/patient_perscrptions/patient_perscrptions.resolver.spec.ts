import { Test, TestingModule } from '@nestjs/testing';
import { PatientPerscrptionsResolver } from './patient_perscrptions.resolver';
import { PatientPerscrptionsService } from './patient_perscrptions.service';

describe('PatientPerscrptionsResolver', () => {
  let resolver: PatientPerscrptionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPerscrptionsResolver, PatientPerscrptionsService],
    }).compile();

    resolver = module.get<PatientPerscrptionsResolver>(PatientPerscrptionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
