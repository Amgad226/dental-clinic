import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TreatmetTypeModule } from 'src/treatmet_type/treatmet_type.module';
import { DiseaseModule } from 'src/disease/disease.module';


@Module({
  imports:[PrismaModule,TreatmetTypeModule,DiseaseModule], 
  controllers: [AppController],
  providers:[AppService],
  })
export class AppModule {}
// problems