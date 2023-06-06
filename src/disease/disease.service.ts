import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DiseaseDto } from './dto';

@Injectable()
export class DiseaseService {
  constructor(private prisma: PrismaService) {}

  //Get All Diseases
  findAll() {
    return this.prisma.disease.findMany();
  }

  //create Disease
  async create(data: DiseaseDto) {
    return await this.prisma.disease.create({
      data,
    });
  }

  //Update Disease
  async update(id: number, data: DiseaseDto) {
    await this.prisma.disease.update({
      data,
      where: {
        id,
      },
    });
    return { data, message: 'Disease updated successfully' };
  }

  //Show Disease
  show(id: number) {
    return this.prisma.disease.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  //Delete Disease
  async delete(id: number) {
    await this.prisma.disease.delete({
      where: {
        id,
      },
    });
    return { message: 'Disease deleted successfully' };
  }
}
