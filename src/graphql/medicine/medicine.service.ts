import { Injectable } from '@nestjs/common';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async create(createMedicineInput: CreateMedicineInput) {
    const { name, concentration, category_id, chemical_material_id } =
      createMedicineInput;

    // check if sended category id exists in categories table
    const category = await this.prisma.category.findUnique({
      where: { id: category_id },
    });
    if (!category)
      throw new GraphQLError(`Category ${category_id} not found`, {
        extensions: { code: 404 },
      });

    // check if All sended chemical_material ids exists in chemical_materials table
    const chemical_material_count = await this.prisma.chemicalMaterial.count({
      where: { id: { in: chemical_material_id } },
    });
    if (chemical_material_count != chemical_material_id.length)
      throw new GraphQLError(
        `chemical_material_ids sended not found in database `,
        { extensions: { code: 404 } },
      );

    //create new medicine
    const medicine = await this.prisma.medicine.create({
      data: {
        name: name,
        concentration: concentration,
        category: {
          connect: {
            id: category_id,
          },
        },
      },
    });

    //attach data chemical_material_id and medicine_id in pivot table
    await this.prisma.medicineChemicalMaterial.createMany({
      data: createMedicineInput.chemical_material_id.map((id) => ({
        chemical_material_id: id,
        medicine_id: medicine.id,
      })),
    });

    return medicine;
  }

  async findAll(page?: number, item_per_page?: number) {
    return await PaginatorService(
      this.prisma.medicine,
      page,
      item_per_page,
      true,
      'category',
    );
  }

  async findOne(id: number) {
    return await this.prisma.medicine.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  async update(id: number, updateMedicineInput: UpdateMedicineInput) {
    const medicine = await this.prisma.medicine.findUnique({
      where: { id: id },
    });
    if (!medicine) {
      throw new GraphQLError(`medicine ${id} not found`, {
        extensions: {
          code: 404,
        },
      });
    }

    return await this.prisma.medicine.update({
      where: { id },
      data: { ...updateMedicineInput },
    });
  }

  async remove(id: number) {
    const medicine = await this.prisma.medicine.findUnique({
      where: { id: id },
    });
    if (!medicine) {
      throw new GraphQLError(`medicine ${id} not found`, {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.medicine.delete({ where: { id } });
    
  }
}
