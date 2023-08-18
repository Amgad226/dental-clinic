import { Test, TestingModule } from '@nestjs/testing';
import { LabOrderResolver } from './lab_order.resolver';
import { LabOrderService } from './lab_order.service';

describe('LabOrderResolver', () => {
  let resolver: LabOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabOrderResolver, LabOrderService],
    }).compile();

    resolver = module.get<LabOrderResolver>(LabOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
