import { Injectable } from '@nestjs/common';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService) {}

  async create(createBadHabitInput: CreateBadHabitInput) {
    return await this.prisma.badHabit.create({
      data: { name: createBadHabitInput.name },
    });
  }

  async findAll(page: any, item_per_page: any) {
    return await PaginatorService(this.prisma.badHabit, page, item_per_page);
  }

  async findOne(id: number) {
    return await this.prisma.badHabit.findUniqueOrThrow({ where: { id: id } });
  }

  async update(id: number, updateBadHabitInput: UpdateBadHabitInput) {
    await this.prisma.badHabit.findUniqueOrThrow({ where: { id: id } });

    return await this.prisma.badHabit.update({
      where: { id: id },
      data: { name: updateBadHabitInput.name },
    });
  }

  async remove(id: number) {
    await this.prisma.badHabit.findUniqueOrThrow({ where: { id: id } });

    return await this.prisma.badHabit.delete({
      where: { id: id },
    });
  }
}
