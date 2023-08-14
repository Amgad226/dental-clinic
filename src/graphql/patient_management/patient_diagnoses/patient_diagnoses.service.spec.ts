import { Test, TestingModule } from '@nestjs/testing';
import { PatientDiagnosesService } from './patient_diagnoses.service';

describe('PatientDiagnosesService', () => {
  let service: PatientDiagnosesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDiagnosesService],
    }).compile();

    service = module.get<PatientDiagnosesService>(PatientDiagnosesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
