import { Test, TestingModule } from '@nestjs/testing';
import { ChemicalMaterialResolver } from './chemical_material.resolver';
import { ChemicalMaterialService } from './chemical_material.service';

describe('ChemicalMaterialResolver', () => {
  let resolver: ChemicalMaterialResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChemicalMaterialResolver, ChemicalMaterialService],
    }).compile();

    resolver = module.get<ChemicalMaterialResolver>(ChemicalMaterialResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
