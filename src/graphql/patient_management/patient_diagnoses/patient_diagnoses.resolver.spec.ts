import { Test, TestingModule } from '@nestjs/testing';
import { PatientDiagnosesResolver } from './patient_diagnoses.resolver';
import { PatientDiagnosesService } from './patient_diagnoses.service';

describe('PatientDiagnosesResolver', () => {
  let resolver: PatientDiagnosesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDiagnosesResolver, PatientDiagnosesService],
    }).compile();

    resolver = module.get<PatientDiagnosesResolver>(PatientDiagnosesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
