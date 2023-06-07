import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadHabitDto } from './dto';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService) {}
  //Get All BadHabits
  findAll() {
    return this.prisma.badHabit.findMany();
  }

  //create BadHabit
  async create(data: BadHabitDto) {
    return await this.prisma.badHabit.create({
      data,
    });
  }

  //Update BadHabit
  async update(id: number, data: BadHabitDto) {
    await this.prisma.badHabit.update({
      data,
      where: {
        id,
      },
    });
    return { data, message: 'BadHabit updated successfully' };
  }

  //Show BadHabit
  show(id: number) {
    return this.prisma.badHabit.findFirstOrThrow({
      where: {
        id,
      },
    });
  }

  //Delete BadHabit
  async delete(id: number) {
    await this.prisma.badHabit.delete({
      where: {
        id,
      },
    });
    return { message: 'BadHabit deleted successfully' };
  }
}
