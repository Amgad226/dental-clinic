import { Injectable } from '@nestjs/common';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) { }

  async create(createMedicineInput: CreateMedicineInput) {
    const { name, concentration, category_id, chemical_material_id } = createMedicineInput;
    console.log('from sercive');

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
      include: {
        category: true
      }
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

  //need relation with category
  async findAll(page: any, item_per_page: any, search?: string) {
    return await PaginatorService({
      Modal: this.prisma.medicine,
      item_per_page,
      page,
      search,
    });
  }

  async findOne(id: number) {
    return await this.prisma.medicine.findUnique({
      where: { id },
      include: {
        category: true,
        medicineChemicalMaterials: {
          include: {
            chemical_material: true
          }
        }
      },
    });

  }

  async update(id: number, { category_id, chemical_material_id, concentration, name }: UpdateMedicineInput) {

    await this.prisma.medicineChemicalMaterial.deleteMany({ where: { id, } })

     //attach data chemical_material_id and medicine_id in pivot table
     await this.prisma.medicineChemicalMaterial.createMany({
      data: chemical_material_id.map((chemical_id) => ({
        chemical_material_id: chemical_id,
        medicine_id: id,
      })),
    });


    return await this.prisma.medicine.update({
      where: { id },
      data: {
        category_id, concentration, name,
      },
    });
  }

  async remove(id: number) {
  
    return await this.prisma.medicine.delete({ where: { id } });

  }
}
