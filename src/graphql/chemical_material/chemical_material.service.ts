import { Injectable } from '@nestjs/common';
import { CreateChemicalMaterialInput } from './dto/create-chemical_material.input';
import { UpdateChemicalMaterialInput } from './dto/update-chemical_material.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';
@Injectable()
export class ChemicalMaterialService {

  constructor(private prisma: PrismaService) { }

  async create({ name, chemical_material_id }: CreateChemicalMaterialInput) {

    const newChemicalMaterial = await this.prisma.chemicalMaterial.create({ data: { name } });

    if (chemical_material_id) {
      //attach data chemical_material_id and medicine_id in pivot table
      await this.prisma.chemicalChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          chemical_material_1_id: newChemicalMaterial.id,
          chemical_material_2_id: id,
        })),
      });
    }
    return newChemicalMaterial;
  }

  async findAll(page?: number, item_per_page?: number) {
    return await PaginatorService(
      this.prisma.chemicalMaterial,
      page,
      item_per_page,
    );
  }


  async findOne(id: number) {
    return await this.prisma.chemicalMaterial.findUnique({ where: { id: id }, })
  }

  async update(id: number, { name, chemical_material_id }: UpdateChemicalMaterialInput) {

    await this.prisma.chemicalChemicalMaterial.deleteMany({ where: { chemical_material_1_id: id } })

    const updatedChemicalMaterial = await this.prisma.chemicalMaterial.update({
      where: { id: id }, data: { name: name }
    });


    if (chemical_material_id) {
      //attach data chemical_material_id and medicine_id in pivot table
      await this.prisma.chemicalChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          chemical_material_1_id: updatedChemicalMaterial.id,
          chemical_material_2_id: id,
        })),
      });
    }
    return updatedChemicalMaterial;


  }
  async remove(id: number) {

    return await this.prisma.chemicalMaterial.delete({ where: { id: id }, });
  }
}
