import { Test, TestingModule } from '@nestjs/testing';
import { PatientPerscrptionsService } from './patient_perscrptions.service';

describe('PatientPerscrptionsService', () => {
  let service: PatientPerscrptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPerscrptionsService],
    }).compile();

    service = module.get<PatientPerscrptionsService>(PatientPerscrptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
