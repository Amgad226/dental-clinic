import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';


async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1000 }));
  await app.listen(3000);
}
bootstrap();
