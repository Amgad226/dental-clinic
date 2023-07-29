import { Test, TestingModule } from '@nestjs/testing';
import { PatientDiseasesResolver } from './patient_diseases.resolver';
import { PatientDiseasesService } from './patient_diseases.service';

describe('PatientDiseasesResolver', () => {
  let resolver: PatientDiseasesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDiseasesResolver, PatientDiseasesService],
    }).compile();

    resolver = module.get<PatientDiseasesResolver>(PatientDiseasesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
