import { Injectable } from '@nestjs/common';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { Prisma } from '@prisma/client';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService) { }

  async create(createBadHabitInput: CreateBadHabitInput) {
    return await this.prisma.badHabit.create({
      data: { name: createBadHabitInput.name },
    });
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.badHabit, page, item_per_page);
  }

  async findOne(id: number) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: { id: id },
    })
    if (!badhabit) {
      throw new GraphQLError('bad_habit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return badhabit;
  }

  async update(id: number, updateBadHabitInput: UpdateBadHabitInput) {
    const badhabit = await this.prisma.badHabit.findUnique({
      where: { id: id },
    })

    if (!badhabit) {
      throw new GraphQLError('badhabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.badHabit.update({
      where: { id: id },
      data: { name: updateBadHabitInput.name }
    });
  }

  async remove(id: number) {
    const badHabit = await this.prisma.badHabit.findUnique({
      where: { id: id },
    })
    if (!badHabit) {
      throw new GraphQLError('badHabit not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.badHabit.delete({
      where: { id: id },
    });
  }
}
