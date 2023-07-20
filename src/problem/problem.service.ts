import { Injectable } from '@nestjs/common';
import { CreateProblemInput } from './dto/create-problem.input';
import { UpdateProblemInput } from './dto/update-problem.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProblemService {
  constructor(private prisma: PrismaService) { }

  async create({ name, problem_type_id }: CreateProblemInput) {
    const t_id = this.prisma.problemType.findUniqueOrThrow({ where: { id: problem_type_id } })
    if (t_id) {
      return await this.prisma.problem.create({
        data: {
          name: name,
          Problem_type: {
            connect: {
              id: +problem_type_id,
            },
          }
        },
      });
    }
  }

  async findAll() {
    return await this.prisma.problem.findMany(
      {
        include: {
          Problem_type: true
        }
      } 
    );
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
