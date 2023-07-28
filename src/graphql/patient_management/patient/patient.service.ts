import { Injectable } from '@nestjs/common';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { GraphQLError } from 'graphql';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) { }
  async create(createPatientInput: CreatePatientInput) {
    return await this.prisma.patient.create({
      data: {
        ...createPatientInput
      }
    });
  }

  async findAll(page?: number, item_per_page?: number) {
    return await PaginatorService(this.prisma.patient, page, item_per_page)
  }

  async findOne(id: number) {
    const patient = await this.prisma.patient.findUnique({ where: { id } })
    if (!patient) {
      throw new GraphQLError('patient not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return patient;
  }

  async update(id: number, updatePatientInput: UpdatePatientInput) {
    const patient = await this.prisma.patient.findUnique({ where: { id } })
    if (!patient) {
      throw new GraphQLError('patient not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.patient.update({
      where: { id },
      data: { ...updatePatientInput }
    });
  }

  async remove(id: number) {
    return await this.prisma.patient.delete({
      where: { id }
    });
  }
}
