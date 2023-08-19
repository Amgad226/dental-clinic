import { Test, TestingModule } from '@nestjs/testing';
import { PatientSessionsResolver } from './patient_sessions.resolver';
import { PatientSessionsService } from './patient_sessions.service';

describe('PatientSessionsResolver', () => {
  let resolver: PatientSessionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientSessionsResolver, PatientSessionsService],
    }).compile();

    resolver = module.get<PatientSessionsResolver>(PatientSessionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
