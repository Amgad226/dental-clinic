import { Test, TestingModule } from '@nestjs/testing';
import { PatientPaymentsService } from './patient_payments.service';

describe('PatientPaymentsService', () => {
  let service: PatientPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientPaymentsService],
    }).compile();

    service = module.get<PatientPaymentsService>(PatientPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
