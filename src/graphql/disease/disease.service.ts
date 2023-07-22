import { Injectable } from '@nestjs/common';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class DiseaseService {
  constructor(private prisma:PrismaService){}

  async create(createDiseaseInput: CreateDiseaseInput) {
    return await this.prisma.disease.create({data:{name:createDiseaseInput.name}})
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.disease, page, item_per_page);
  }

  async findOne(id: number) {
    const disease = await this.prisma.disease.findUnique({
      where: {id: id},
    }) 
    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  disease;
  }

  async update(id: number, updateDiseaseInput: UpdateDiseaseInput) {
    const disease = await this.prisma.disease.findUnique({
      where: {id: id},
    }) 

    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.disease.update({
      where:{id:id},
      data:{name:updateDiseaseInput.name}
    });
  }

  async remove(id: number) {
    const disease = await this.prisma.disease.findUnique({
      where: {id: id},
    }) 
    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.disease.delete({
      where:{id:id},
    });
  }
}
