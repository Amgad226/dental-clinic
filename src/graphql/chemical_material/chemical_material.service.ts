import { Injectable } from '@nestjs/common';
import { CreateChemicalMaterialInput } from './dto/create-chemical_material.input';
import { UpdateChemicalMaterialInput } from './dto/update-chemical_material.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { GraphQLError } from 'graphql';
@Injectable()
export class ChemicalMaterialService {
  constructor(private prisma: PrismaService) { }

  async create({ name }: CreateChemicalMaterialInput) {
    return await this.prisma.chemicalMaterial.create({ data: { name } });
  }

  async findAll(page?: number, item_per_page?: number) {
    return await PaginatorService(
      this.prisma.chemicalMaterial,
      page,
      item_per_page,
    );
  }


  async findOne(id: number) {
    const chemicalMaterial = await this.prisma.chemicalMaterial.findUnique({
      where: { id: id },
    })
    if (!chemicalMaterial) {
      throw new GraphQLError('chemicalMaterial not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return chemicalMaterial;
  }

  async update(id: number, updateChemicalMaterialInput: UpdateChemicalMaterialInput) {
    const chemicalMaterial = await this.prisma.chemicalMaterial.findUnique({
      where: { id: id },
    })

    if (!chemicalMaterial) {
      throw new GraphQLError('chemicalMaterial not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.chemicalMaterial.update({
      where: { id: id },
      data: { name: updateChemicalMaterialInput.name }
    });
  }
  async remove(id: number) {
    const chemicalMaterial = await this.prisma.chemicalMaterial.findUnique({
      where: { id: id },
    })
    if (!chemicalMaterial) {
      throw new GraphQLError('chemicalMaterial not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.chemicalMaterial.delete({
      where: { id: id },
    });
  }
}
