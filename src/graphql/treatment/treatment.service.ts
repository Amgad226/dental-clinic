import { Injectable } from '@nestjs/common';
import { CreateTreatmentInput } from './dto/create-treatment.input';
import { UpdateTreatmentInput } from './dto/update-treatment.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class TreatmentService {
  constructor(private prisma: PrismaService) {}

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
    const treatment = await this.prisma.treatment.create({
      data: {
        name: CreateTreatmentInput.name,
        price: CreateTreatmentInput.price,
        color: CreateTreatmentInput.color,
        treatment_type: {
          connect: {
            id: CreateTreatmentInput.treatment_type_id,
          },
        },
        steps: {
          create:CreateTreatmentInput.steps.map((step) => ({
            name: step.name,
            subSteps: {
              create: step.subStep.map((subStep) => ({
                name: subStep.name,
              })),
            },
          })),
        },
      },
      include: {
        steps:{
          include: {
            subSteps: true
          }
        },
        treatment_type: true,
      },

    });

          // // create sub-steps for treatment
          // const subs = CreateTreatmentInput.steps.map((step) => {
          //   return this.prisma.step.create({
          //     data: {
          //       name: step.name,
          //       treatment: {
          //         connect: {
          //           id: treatment.id,
          //         },
          //       },
          //     },
          //   });
          // });
      
          // // wait for all steps to be created before returning treatment
          // await Promise.all(subs);
    return treatment;

  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.treatment, page, item_per_page);
  }

  async findOne(id: number) {
    const treatment = await this.prisma.treatment.findUnique({
      where: { id: id },
      include: {
        steps: {
          include: {
            subSteps: true,
          },
        },
        treatment_type: true,
      },
    });
    
    console.dir(treatment, { depth: null });
    
    return treatment;
  }

    // const treatment = await this.prisma.treatment.findUnique({
    //   where: {id: id},
    // })
    // if (!treatment) {
    //   throw new GraphQLError('treatment not found', {
    //     extensions: {
    //       code: 404,
    //     },
    //   });
    // }
    // const steps =await this.prisma.step.findMany({
    //   where: {treatment_id: id}
    // })

    // return  treatment;
  

  async update(id: number, updateTreatmentInput: UpdateTreatmentInput) {
    const treatment = await this.prisma.treatment.findUnique({
      where: { id: id },
    });

    if (!treatment) {
      throw new GraphQLError('treatment not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.treatment.update({
      where: { id: id },
      data: { name: updateTreatmentInput.name },
    });
  }

  async remove(id: number) {
    const treatment = await this.prisma.treatment.findUnique({
      where: { id: id },
    });
    if (!treatment) {
      throw new GraphQLError('treatment not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.treatment.delete({
      where: { id: id },
    });
  }
}
