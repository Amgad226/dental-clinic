import { Test, TestingModule } from '@nestjs/testing';
import { LabResolver } from './lab.resolver';
import { LabService } from './lab.service';

describe('LabResolver', () => {
  let resolver: LabResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabResolver, LabService],
    }).compile();

    resolver = module.get<LabResolver>(LabResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
