import { Injectable } from '@nestjs/common';
import { CreateProblemTypeInput } from './dto/create-problem_type.input';
import { UpdateProblemTypeInput } from './dto/update-problem_type.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProblemTypeService {
  constructor(private prisma: PrismaService) {}

  async create(createProblemTypeInput: CreateProblemTypeInput) {
    return await this.prisma.problemType.create({
      data: { ...createProblemTypeInput },
    });
  }

  async findAll() {
    return await this.prisma.problemType.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.problemType.findUnique({ where: { id } });
  }

  async update(id: number, updateProblemTypeInput: UpdateProblemTypeInput) {
    return await this.prisma.problemType.update({
      where: { id },
      data: { ...updateProblemTypeInput },
    });
  }
  //
  async remove(id: number) {
    return await this.prisma.problemType.delete({ where: { id } });
  }
}
//
