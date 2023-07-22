import { Injectable } from '@nestjs/common';
import { CreateTreatmentInput } from './dto/create-treatment.input';
import { UpdateTreatmentInput } from './dto/update-treatment.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class TreatmentService {
  constructor(private prisma: PrismaService){}

  async create(CreateTreatmentInput: CreateTreatmentInput) {
    const treatment_type = await this.prisma.treatmentType.findUnique({
      where: { id: CreateTreatmentInput.treatment_type_id },
    });
    if (!treatment_type) {
      throw new GraphQLError('treatment_type not found', {
        extensions: {
          code: 404,
        },
      });
    }

    //create new problem
    return await this.prisma.treatment.create({
      data: {
        name: CreateTreatmentInput.name,
        price:CreateTreatmentInput.price,
        color:CreateTreatmentInput.color,
        treatment_type: {
          connect: {
            id: CreateTreatmentInput.treatment_type_id,
          },
        },
      },
    });
    // }
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.treatment, page, item_per_page);
  }

  async findOne(id: number) {
    const treatment = await this.prisma.treatment.findUnique({
      where: {id: id},
    }) 
    if (!treatment) {
      throw new GraphQLError('treatment not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  treatment;
  }

  async update(id: number, updateTreatmentInput: UpdateTreatmentInput) {
    const treatment = await this.prisma.treatment.findUnique({
      where: {id: id},
    }) 

    if (!treatment) {
      throw new GraphQLError('treatment not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.treatment.update({
      where:{id:id},
      data:{name:updateTreatmentInput.name}
    });
  }


  async remove(id: number) {
    const treatment = await this.prisma.treatment.findUnique({
      where: {id: id},
    }) 
    if (!treatment) {
      throw new GraphQLError('treatment not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.treatment.delete({
      where:{id:id},
    });
  }
}
