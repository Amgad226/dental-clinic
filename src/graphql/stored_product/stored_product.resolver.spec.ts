import { Test, TestingModule } from '@nestjs/testing';
import { StoredProductResolver } from './stored_product.resolver';
import { StoredProductService } from './stored_product.service';

describe('StoredProductResolver', () => {
  let resolver: StoredProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoredProductResolver, StoredProductService],
    }).compile();

    resolver = module.get<StoredProductResolver>(StoredProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
