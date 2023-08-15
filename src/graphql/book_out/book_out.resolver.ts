import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookOutService } from './book_out.service';
import { BookOut } from './entities/book_out.entity';
import { CreateBookOutInput } from './dto/create-book_out.input';
import { checkIfExists, validator } from '../validatior/validator';

@Resolver(() => BookOut)
export class BookOutResolver {
  constructor(private readonly bookOutService: BookOutService) {}

  @Mutation(() => BookOut)
  async createBookOut(@Args('createBookOutInput') createBookOutInput: CreateBookOutInput) {
    await validator(checkIfExists)({ id : createBookOutInput.product_id, modelName: 'product' });
    await validator(checkIfExists)({ id : createBookOutInput.stored_prduct_id, modelName: 'storedProduct' });
    return this.bookOutService.create(createBookOutInput);
  }

  @Query(() => [BookOut], { name: 'bookOut' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('search', { nullable: true }) serach?: string,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const book_out = await this.bookOutService.findAll(
      page,
      item_per_page,
      serach,
    );
    return {
      items: book_out.data,
      totalPages: book_out.totalPages,
      page: book_out.page,
      item_per_page: book_out.item_per_page,
    };
  }

  @Query(() => BookOut, { name: 'bookOut' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    await validator(checkIfExists)({ id, modelName: 'bookOut' });
    return this.bookOutService.findOne(id);
  }
}
