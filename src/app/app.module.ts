import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
// import { AppModule } from './app.module';
import { AppService } from './app.service';


@Module({
  controllers: [AppController],
  providers:[AppService],
  })
export class AppModule {}
