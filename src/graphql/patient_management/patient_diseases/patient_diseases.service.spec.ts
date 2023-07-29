import { Test, TestingModule } from '@nestjs/testing';
import { PatientDiseasesService } from './patient_diseases.service';

describe('PatientDiseasesService', () => {
  let service: PatientDiseasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDiseasesService],
    }).compile();

    service = module.get<PatientDiseasesService>(PatientDiseasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
