import { Test, TestingModule } from '@nestjs/testing';
import { PatientPaymentsResolver } from './patient_payments.resolver';
import { PatientPaymentsService } from './patient_payments.service';

describe('PatientPaymentsResolver', () => {
  let resolver: PatientPaymentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPaymentsResolver, PatientPaymentsService],
    }).compile();

    resolver = module.get<PatientPaymentsResolver>(PatientPaymentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
