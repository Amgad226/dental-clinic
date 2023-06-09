import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// import { DiseasModule } from './diseas/diseas.module';
import { DiseaseModule } from './graphql/disease/disease.module';


@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      
      formatError: (error:any) => {
        // console.log(error);
        const graphQLFormattedError = {
          message: error.message|| "SERVER_ERROR",
          code: error.extensions?.code || error.code || 500,
          // path:error.path
          // name: error.extensions?.exception?.name || error.name || "name",
        };
        return graphQLFormattedError;
      },
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,}),
    DiseaseModule,
  ],
  controllers: [AppController],
  providers:[AppService],
  })
export class AppModule {}
// problems