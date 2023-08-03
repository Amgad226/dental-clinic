import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentResolver } from './treatment.resolver';
import { TreatmentService } from './treatment.service';

describe('TreatmentResolver', () => {
  let resolver: TreatmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatmentResolver, TreatmentService],
    }).compile();

    resolver = module.get<TreatmentResolver>(TreatmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
