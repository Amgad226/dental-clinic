import { Test, TestingModule } from '@nestjs/testing';
import { PatientDesisesResolver } from './patient_desises.resolver';
import { PatientDesisesService } from './patient_desises.service';

describe('PatientDesisesResolver', () => {
  let resolver: PatientDesisesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientDesisesResolver, PatientDesisesService],
    }).compile();

    resolver = module.get<PatientDesisesResolver>(PatientDesisesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
