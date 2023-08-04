import { Test, TestingModule } from '@nestjs/testing';
import { ProblemTypeResolver } from './problem_type.resolver';
import { ProblemTypeService } from './problem_type.service';

describe('ProblemTypeResolver', () => {
  let resolver: ProblemTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProblemTypeResolver, ProblemTypeService],
    }).compile();

    resolver = module.get<ProblemTypeResolver>(ProblemTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
