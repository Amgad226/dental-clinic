import { Test, TestingModule } from '@nestjs/testing';
import { StoredProductService } from './stored_product.service';

describe('StoredProductService', () => {
  let service: StoredProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoredProductService],
    }).compile();

    service = module.get<StoredProductService>(StoredProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
