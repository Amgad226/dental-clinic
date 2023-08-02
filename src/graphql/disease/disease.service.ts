import { Injectable } from '@nestjs/common';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { PaginatorServicecopy } from 'src/pagination/PaginatorService copy';

@Injectable()
export class DiseaseService {
  constructor(private prisma: PrismaService) {}

  async create({ name, chemical_material_id }: CreateDiseaseInput) {
    if (chemical_material_id) {
      //check if all sended chemical_material_ids exists in chemical_material table
      const chemical_material_count = await this.prisma.chemicalMaterial.count({
        where: { id: { in: chemical_material_id } },
      });

      if (chemical_material_count != chemical_material_id.length)
        throw new GraphQLError('chemical_material_ids not found in database', {
          extensions: {
            code: 404,
          },
        });
    }

    const disease = await this.prisma.disease.create({
      data: { name: name },
    });

    if (chemical_material_id) {
      //attach data chemical_material_id and disease id in pivot table
      await this.prisma.diseaseChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          disease_id: disease.id,
          chemical_material_id: id,
        })),
      });
    }
    return disease;
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.disease, page, item_per_page);
  }
  async findAll2(page: any, item_per_page: any, search?: string) {
    return await PaginatorServicecopy({
      Modal: this.prisma.disease,
      item_per_page, page, search
    });
  }

  async findOne(id: number) {
    const disease = await this.prisma.disease.findUnique({
      where: { id: id },
    });
    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return disease;
  }

  async update(id: number, { name, chemical_material_id }: UpdateDiseaseInput) {
    const disease = await this.prisma.disease.findUnique({
      where: { id: id },
    });

    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }

    if (chemical_material_id) {
      //check if all sended chemical_material_ids exists in chemical_material table
      const chemical_material_count = await this.prisma.chemicalMaterial.count({
        where: { id: { in: chemical_material_id } },
      });

      if (chemical_material_count != chemical_material_id.length)
        throw new GraphQLError('chemical_material_ids not found in database', {
          extensions: {
            code: 404,
          },
        });
    }

    await this.prisma.diseaseChemicalMaterial.deleteMany({
      where: { disease_id: id },
    });

    const updatedisease = await this.prisma.disease.update({
      where: { id: id },
      data: { name: name },
    });

    if (chemical_material_id) {
      //attach data chemical_material_id and badhabit id in pivot table
      await this.prisma.diseaseChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          disease_id: updatedisease.id,
          chemical_material_id: id,
        })),
      });
    }
    return updatedisease;
  }

  async remove(id: number) {
    const disease = await this.prisma.disease.findUnique({
      where: { id: id },
    });
    if (!disease) {
      throw new GraphQLError('disease not found', {
        extensions: {
          code: 404,
        },
      });
    }

    await this.prisma.diseaseChemicalMaterial.deleteMany({
      where: { disease_id: id },
    });

    return await this.prisma.disease.delete({
      where: { id: id },
    });
  }
}
