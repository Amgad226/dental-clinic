import { Test, TestingModule } from '@nestjs/testing';
import { BookInResolver } from './book_in.resolver';
import { BookInService } from './book_in.service';

describe('BookInResolver', () => {
  let resolver: BookInResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookInResolver, BookInService],
    }).compile();

    resolver = module.get<BookInResolver>(BookInResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
