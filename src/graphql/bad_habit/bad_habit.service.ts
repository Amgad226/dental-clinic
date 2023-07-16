import { Injectable } from '@nestjs/common';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BadHabitService {
  constructor(private prisma: PrismaService){}
  async create(createBadHabitInput: CreateBadHabitInput) {
    return await this.prisma.badHabit.create({
      data:{name:createBadHabitInput.name},
    });
  }

  async findAll() {
    return await this.prisma.badHabit.findMany();
  }

  async findOne(id: number) {
    const bad = await this.checkBadHabitExist(id)
    return await this.prisma.badHabit.findUnique({
       where: {id:id}
      });
  }

  async update(id: number, updateBadHabitInput: UpdateBadHabitInput) {
    const bad = await this.checkBadHabitExist(id)
    return await this.prisma.badHabit.update({
      where:{id:id},
      data:{name:updateBadHabitInput.name}
    });
  }

  async remove(id: number) {
    const bad = await this.checkBadHabitExist(id)
    return await this.prisma.badHabit.delete({
      where:{id:id},
    });
  }


  private async checkBadHabitExist(id:number) {
    
    const BadHabitExists = await this.prisma.badHabit.findFirst({
      where: { id: id }, 
      select: { id: true }, // Select only the "id" field
    });
    
    if(BadHabitExists== null){
      //catch it by  graphQlWrapper in resolver
      throw { 
        message: 'BadHabit not found ',
        code:404,
       }; 
      }
      return BadHabitExists
    
  }
}
