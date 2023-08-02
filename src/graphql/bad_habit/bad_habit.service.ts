import { Injectable } from '@nestjs/common';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService) {}

  async create({name,chemical_material_id}: CreateBadHabitInput) {
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

    const bad_habit = await this.prisma.badHabit.create({
      data: { name: name },
    });

    if (chemical_material_id) {
      //attach data chemical_material_id and badhabit id in pivot table
      await this.prisma.badHabitChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          bad_habit_id: bad_habit.id,
          chemical_material_id: id,
        })),
      });
    }
    return bad_habit;
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.badHabit, page, item_per_page);
  }

  async findOne(id: number) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: {id: id},
    }) 
    if (!badhabit) {
      throw new GraphQLError('bad_habit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  badhabit;
  }

  async update(id: number, { name ,chemical_material_id }: UpdateBadHabitInput) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: { id: id },
    });

    if (!badhabit) {
      throw new GraphQLError('badhabit not found', {
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
    await this.prisma.badHabitChemicalMaterial.deleteMany({
      where: { bad_habit_id: id },
    });

    const updateBadhabit = await this.prisma.badHabit.update({
      where: { id: id },
      data: { name: name },
    });

    if (chemical_material_id) {
      //attach data chemical_material_id and badhabit id in pivot table
      await this.prisma.badHabitChemicalMaterial.createMany({
        data: chemical_material_id.map((id) => ({
          bad_habit_id: updateBadhabit.id,
          chemical_material_id: id,
        })),
      });
    }
    return updateBadhabit;
  }


  async remove(id: number) {
    const badHabit = await this.prisma.badHabit.findUnique({
      where: { id: id },
    });
    if (!badHabit) {
      throw new GraphQLError('badHabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    await this.prisma.badHabitChemicalMaterial.deleteMany({
      where: { bad_habit_id: id },
    });

    return await this.prisma.badHabit.delete({
      where: { id: id },
    });
  }
}
