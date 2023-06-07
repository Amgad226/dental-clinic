import { Module } from '@nestjs/common';
import { BadHabitController } from './bad_habit.controller';
import { BadHabitService } from './bad_habit.service';

@Module({
  controllers: [BadHabitController],
  providers: [BadHabitService]
})
export class BadHabitModule {}
