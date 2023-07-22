import { Injectable } from '@nestjs/common';
import { CreateChemicalMaterialInput } from './dto/create-chemical_material.input';
import { UpdateChemicalMaterialInput } from './dto/update-chemical_material.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class ChemicalMaterialService {
  constructor(private prisma: PrismaService) {}

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
    return await this.prisma.chemicalMaterial.findUniqueOrThrow({
      where: { id: +id },
    });
  }

  async update(
    id: number,
    updateChemicalMaterialInput: UpdateChemicalMaterialInput,
  ) {
    //check if chemicalMaterial is exist in chemical_materials table
    await this.prisma.chemicalMaterial.findUniqueOrThrow({
      where: { id: +id },
    });

    return await this.prisma.chemicalMaterial.update({
      where: { id },
      data: { ...updateChemicalMaterialInput },
    });
  }

  async remove(id: number) {
    //check if chemicalMaterial is exist in chemical_materials table
    await this.prisma.chemicalMaterial.findUniqueOrThrow({
      where: { id: +id },
    });

    return await this.prisma.chemicalMaterial.delete({ where: { id } });
  }
}
