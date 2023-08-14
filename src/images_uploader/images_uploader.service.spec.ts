import { Test, TestingModule } from '@nestjs/testing';
import { ImagesUploaderService } from './images_uploader.service';

describe('ImagesUploaderService', () => {
  let service: ImagesUploaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesUploaderService],
    }).compile();

    service = module.get<ImagesUploaderService>(ImagesUploaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
