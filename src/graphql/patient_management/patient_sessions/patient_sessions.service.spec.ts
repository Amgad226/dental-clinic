import { Test, TestingModule } from '@nestjs/testing';
import { PatientSessionsService } from './patient_sessions.service';

describe('PatientSessionsService', () => {
  let service: PatientSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientSessionsService],
    }).compile();

    service = module.get<PatientSessionsService>(PatientSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
