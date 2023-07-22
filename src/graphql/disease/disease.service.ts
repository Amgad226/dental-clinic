import { Injectable } from '@nestjs/common';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class DiseaseService {
  constructor(private prisma:PrismaService){}

  async create(createDiseaseInput: CreateDiseaseInput) {
    return await this.prisma.disease.create({data:{name:createDiseaseInput.name}})
  }

  async findAll(page: any, item_per_page: any) {
    if (page != 0) page--;

    let skip = page * item_per_page;

    const diseases = await this.prisma.disease.findMany({
      take: item_per_page,
      skip: skip,
    });
    const totaldisease = await this.prisma.disease.count();
    const totalPages = Math.round(totaldisease / item_per_page);
    return { data: diseases, totalPages: totalPages };
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
