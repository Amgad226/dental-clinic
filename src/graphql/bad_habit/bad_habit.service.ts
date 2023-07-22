import { Injectable } from '@nestjs/common';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService){}

  async create(createBadHabitInput: CreateBadHabitInput) {
    return await this.prisma.badHabit.create({
      data:{name:createBadHabitInput.name},
    });
  }

  async findAll(page: any, item_per_page: any) {
    if (page != 0) page--;

    let skip = page * item_per_page;

    const badHabits = await this.prisma.badHabit.findMany({
      take: item_per_page,
      skip: skip,
    });
    const totalbadhabit = await this.prisma.badHabit.count();
    const totalPages = Math.round(totalbadhabit / item_per_page);
    return { data: badHabits, totalPages: totalPages };
  }

  async findOne(id: number) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: {id: id},
    }) 
    if (!badhabit) {
      throw new GraphQLError('badhabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return  badhabit;
  }

  async update(id: number, updateBadHabitInput: UpdateBadHabitInput) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: {id: id},
    }) 

    if (!badhabit) {
      throw new GraphQLError('badhabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.badHabit.update({
      where:{id:id},
      data:{name:updateBadHabitInput.name}
    });
  }

  async remove(id: number) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: {id: id},
    }) 
    if (!badhabit) {
      throw new GraphQLError('badhabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.badHabit.delete({
      where:{id:id},
    });
  }
}
