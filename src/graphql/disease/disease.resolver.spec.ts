import { Test, TestingModule } from '@nestjs/testing';
import { DiseaseResolver } from './disease.resolver';
import { DiseaseService } from './disease.service';

describe('DiseaseResolver', () => {
  let resolver: DiseaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiseaseResolver, DiseaseService],
    }).compile();

    resolver = module.get<DiseaseResolver>(DiseaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
