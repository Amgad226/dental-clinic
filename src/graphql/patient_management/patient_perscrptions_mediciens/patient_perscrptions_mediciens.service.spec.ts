import { Test, TestingModule } from '@nestjs/testing';
import { PatientPerscrptionsMediciensService } from './patient_perscrptions_mediciens.service';

describe('PatientPerscrptionsMediciensService', () => {
  let service: PatientPerscrptionsMediciensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPerscrptionsMediciensService],
    }).compile();

    service = module.get<PatientPerscrptionsMediciensService>(PatientPerscrptionsMediciensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
