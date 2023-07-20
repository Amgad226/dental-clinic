import { Injectable } from '@nestjs/common';
import { CreateProblemInput } from './dto/create-problem.input';
import { UpdateProblemInput } from './dto/update-problem.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProblemService {
  constructor(private prisma: PrismaService) { }

  async create({ name, problem_type_id }: CreateProblemInput) {
    return await this.prisma.problem.create({
      data: {
        name: name,
        problem_type_id:1,
        Problem_type: {
          connect: {
            id: 1
          }
        }
      },
    });
  }

  async findAll() {
    return await this.prisma.problem.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.problem.findUnique({ where: { id } });
  }

  async update(id: number, updateProblemInput: UpdateProblemInput) {
    return await this.prisma.problem.update({
      where: { id },
      data: { ...updateProblemInput },
    });
  }

  async remove(id: number) {
    return await this.prisma.problem.delete({ where: { id } });
  }
}
