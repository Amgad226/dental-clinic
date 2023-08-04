import { Injectable } from '@nestjs/common';
import { CreateProblemInput } from './dto/create-problem.input';
import { UpdateProblemInput } from './dto/update-problem.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class ProblemService {
  constructor(private prisma: PrismaService) {}

  async create({ name, problem_type_id }: CreateProblemInput) {
    //check if problem_type_id is exist in problem_type table
    const problem_type = await this.prisma.problemType.findUnique({
      where: { id: problem_type_id },
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
            id: problem_type_id,
          },
        },
      },
    });
    // }
  }

  //need a relation with problem-type
  async findAll(page: any, item_per_page: any, search?: string) {
    return await PaginatorService({
      Modal: this.prisma.problem,
      item_per_page,
      page,
      search,
    });
  }

  async findOne(id: number) {
    const problem = await this.prisma.problem.findUnique({
      where: {id: id},
    }) 
    if (!problem) {
      throw new GraphQLError('problem not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  problem;
  }

  async update(id: number, updateProblemInput: UpdateProblemInput) {
    const problem = await this.prisma.problem.findUnique({
      where: {id: id},
    }) 

    if (!problem) {
      throw new GraphQLError('problem not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.problem.update({
      where:{id:id},
      data:{name:updateProblemInput.name}
    });
  }

  async remove(id: number) {
    const problem = await this.prisma.problem.findUnique({
      where: {id: id},
    }) 
    if (!problem) {
      throw new GraphQLError('problem not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.problem.delete({
      where:{id:id},
    });
  }
}
