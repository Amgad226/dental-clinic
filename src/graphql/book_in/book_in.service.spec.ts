import { Test, TestingModule } from '@nestjs/testing';
import { BookInService } from './book_in.service';

describe('BookInService', () => {
  let service: BookInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookInService],
    }).compile();

    service = module.get<BookInService>(BookInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
