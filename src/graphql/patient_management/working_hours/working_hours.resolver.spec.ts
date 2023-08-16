import { Test, TestingModule } from '@nestjs/testing';
import { WorkingHoursResolver } from './working_hours.resolver';
import { WorkingHoursService } from './working_hours.service';

describe('WorkingHoursResolver', () => {
  let resolver: WorkingHoursResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingHoursResolver, WorkingHoursService],
    }).compile();

    resolver = module.get<WorkingHoursResolver>(WorkingHoursResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
