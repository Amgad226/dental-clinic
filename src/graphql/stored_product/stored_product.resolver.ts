import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StoredProductService } from './stored_product.service';
import { StoredProduct } from './entities/stored_product.entity';
import { checkIfExists, validator } from 'src/validatior/validator';

@Resolver(() => StoredProduct)
export class StoredProductResolver {
  constructor(private readonly storedProductService: StoredProductService) { }
  @Query(() => [StoredProduct], { name: 'storedProducts' })
  findAll() {
    return this.storedProductService.findAll();
  }

  @Query(() => [StoredProduct], { name: 'selectStoredProduct' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    await validator(checkIfExists)({ id, modelName: 'product' });
    return this.storedProductService.selectStoredProduct(id);
  }

  @Mutation(() => StoredProduct)
  async removeStoredProduct(@Args('id', { type: () => Int }) id: number) {
    await validator(checkIfExists)({ id, modelName: 'storedProduct' });
    return this.storedProductService.remove(id);
  }
}
