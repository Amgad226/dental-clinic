import { Test, TestingModule } from '@nestjs/testing';
import { PatientLabOrdersService } from './patient_lab_orders.service';

describe('PatientLabOrdersService', () => {
  let service: PatientLabOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientLabOrdersService],
    }).compile();

    service = module.get<PatientLabOrdersService>(PatientLabOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
