import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BadHabitService } from './bad_habit.service';
import { BadHabitDto } from './dto';

@Controller('bad_habit')
export class BadHabitController {
  constructor(private bad_habitservice: BadHabitService) {}
  //Get BadHabit
  @Get('all')
  treatment_type() {
    return this.bad_habitservice.findAll();
  }

  //Create BadHabit
  @UsePipes(ValidationPipe)
  @Post('create')
  async create(@Body() body: BadHabitDto) {
    return await this.bad_habitservice.create(body);
  }

  //Update BadHabit
  @UsePipes(ValidationPipe)
  @Patch('update/:id')
  async update(@Param('id', ParseIntPipe) id, @Body() body: BadHabitDto) {
    return await this.bad_habitservice.update(id, body);
  }

  //Show BadHabit
  @UsePipes(ValidationPipe)
  @Get('show/:id')
  show(@Param('id', ParseIntPipe) id) {
    return this.bad_habitservice.show(id);
  }

  //Delete BadHabit
  @UsePipes(ValidationPipe)
  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id) {
    return await this.bad_habitservice.delete(id);
  }
}
