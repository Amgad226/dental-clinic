import { Test, TestingModule } from '@nestjs/testing';
import { PatientLabOrdersResolver } from './patient_lab_orders.resolver';
import { PatientLabOrdersService } from './patient_lab_orders.service';

describe('PatientLabOrdersResolver', () => {
  let resolver: PatientLabOrdersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientLabOrdersResolver, PatientLabOrdersService],
    }).compile();

    resolver = module.get<PatientLabOrdersResolver>(PatientLabOrdersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
