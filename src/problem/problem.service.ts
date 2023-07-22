import { Injectable } from '@nestjs/common';
import { CreateProblemInput } from './dto/create-problem.input';
import { UpdateProblemInput } from './dto/update-problem.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class ProblemService {
  constructor(private prisma: PrismaService) {}

  async create({ name, problem_type_id }: CreateProblemInput) {
    //check if problem_type_id is exist in problem_type table
    const problem_type = await this.prisma.problemType.findUnique({
      where: { id: +problem_type_id },
    });
    if (!problem_type) {
      throw new GraphQLError('problem type not found', {
        extensions: {
          code: 404,
        },
      });
    }

    //create new problem
    return await this.prisma.problem.create({
      data: {
        name: name,
        Problem_type: {
          connect: {
            id: +problem_type_id,
          },
        },
      },
    });
    // }
  }

  async findAll(page: any, item_per_page: any) {
    // this condition because we need to start first page from page=1 not page=0
    if (page != 0) page--;

    let skip = page * item_per_page;

    const problems = await this.prisma.problem.findMany({
      take: item_per_page,
      skip: skip,
      include: {
        // ['Problem_type']: true,
        ['Problem_type']: true,

      },
    });
    const totalProblem = await this.prisma.problem.count();
    const totalPages = Math.round(totalProblem / item_per_page);

    return { data: problems, totalPages: totalPages };
  }

  async findOne(id: number) {
    return await this.prisma.problem.findUnique({
      where: { id },
      include: {
        ['Problem_type']: true,
      },
    });
  }

  async update(id: number, updateProblemInput: UpdateProblemInput) {
    //check if problem is exist in problem table
    const problem = await this.prisma.problem.findUnique({
      where: { id: +id },
    });
    if (!problem) {
      throw new GraphQLError('problem not found', {
        extensions: {
          code: 404,
        },
      });
    }

    return await this.prisma.problem.update({
      where: { id },
      data: { ...updateProblemInput },
    });
  }

  async remove(id: number) {
    //check if problem is exist in problem table
    const problem = await this.prisma.problem.findUnique({
      where: { id: +id },
    });
    if (!problem) {
      throw new GraphQLError('problem not found', {
        extensions: {
          code: 404,
        },
      });
    }

    return await this.prisma.problem.delete({ where: { id } });
  }
}
