import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TreatmetTypeModule } from 'src/treatmet_type/treatmet_type.module';
import { DiseaseModule } from 'src/disease/disease.module';
import { BadHabitModule } from 'src/bad_habit/bad_habit.module';


@Module({
  imports:[PrismaModule,TreatmetTypeModule,DiseaseModule,BadHabitModule], 
  controllers: [AppController],
  providers:[AppService],
  })
export class AppModule {}
// problems