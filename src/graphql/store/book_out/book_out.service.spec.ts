import { Test, TestingModule } from '@nestjs/testing';
import { BookOutService } from './book_out.service';

describe('BookOutService', () => {
  let service: BookOutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookOutService],
    }).compile();

    service = module.get<BookOutService>(BookOutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
