import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { LabResolver } from './lab.resolver';
import { LabService } from './lab.service';

describe('LabResolver', () => {
  let resolver: LabResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabResolver, LabService,PrismaService],
    }).compile();

    resolver = module.get<LabResolver>(LabResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
