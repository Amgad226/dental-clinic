import { Test, TestingModule } from '@nestjs/testing';
import { ChemicalMaterialService } from './chemical_material.service';

describe('ChemicalMaterialService', () => {
  let service: ChemicalMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChemicalMaterialService],
    }).compile();

    service = module.get<ChemicalMaterialService>(ChemicalMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
