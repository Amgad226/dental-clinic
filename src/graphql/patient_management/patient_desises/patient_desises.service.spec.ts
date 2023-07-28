import { Test, TestingModule } from '@nestjs/testing';
import { PatientDesisesService } from './patient_desises.service';

describe('PatientDesisesService', () => {
  let service: PatientDesisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDesisesService],
    }).compile();

    service = module.get<PatientDesisesService>(PatientDesisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
