import { Test, TestingModule } from '@nestjs/testing';
import { PatientBadHabitsService } from './patient_bad-habits.service';

describe('PatientBadHabitsService', () => {
  let service: PatientBadHabitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientBadHabitsService],
    }).compile();

    service = module.get<PatientBadHabitsService>(PatientBadHabitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
