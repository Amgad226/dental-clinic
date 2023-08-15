import { Test, TestingModule } from '@nestjs/testing';
import { BookOutResolver } from './book_out.resolver';
import { BookOutService } from './book_out.service';

describe('BookOutResolver', () => {
  let resolver: BookOutResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookOutResolver, BookOutService],
    }).compile();

    resolver = module.get<BookOutResolver>(BookOutResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
