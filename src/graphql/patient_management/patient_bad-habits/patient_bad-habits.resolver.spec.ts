import { Test, TestingModule } from '@nestjs/testing';
import { PatientBadHabitsResolver } from './patient_bad-habits.resolver';
import { PatientBadHabitsService } from './patient_bad-habits.service';

describe('PatientBadHabitsResolver', () => {
  let resolver: PatientBadHabitsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientBadHabitsResolver, PatientBadHabitsService],
    }).compile();

    resolver = module.get<PatientBadHabitsResolver>(PatientBadHabitsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
