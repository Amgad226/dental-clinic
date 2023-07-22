import { Injectable } from '@nestjs/common';
import { CreateProblemTypeInput } from './dto/create-problem_type.input';
import { UpdateProblemTypeInput } from './dto/update-problem_type.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { GraphQLError } from 'graphql';

@Injectable()
export class ProblemTypeService {
  constructor(private prisma: PrismaService) { }

  async create(createProblemTypeInput: CreateProblemTypeInput) {
    return await this.prisma.problemType.create({
      data: { ...createProblemTypeInput },
    });
  }

  async findAll() {
    return await this.prisma.problemType.findMany();
  }

  
  async findOne(id: number) {
    const problemType = await this.prisma.problemType.findUnique({
      where: {id: id},
    }) 
    if (!problemType) {
      throw new GraphQLError('problemType not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  problemType;
  }


  async update(id: number, updateProblemTypeInput: UpdateProblemTypeInput) {
    const problemType = await this.prisma.problemType.findUnique({
      where: {id: id},
    }) 

    if (!problemType) {
      throw new GraphQLError('problemType not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.problemType.update({
      where:{id:id},
      data:{name:updateProblemTypeInput.name}
    });
  }

  async remove(id: number) {
    const problemType = await this.prisma.problemType.findUnique({
      where: {id: id},
    }) 
    if (!problemType) {
      throw new GraphQLError('problemType not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.problemType.delete({
      where:{id:id},
    });
  }
}

