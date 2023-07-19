import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { DiseaseModule } from './graphql/disease/disease.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BadHabitModule } from './graphql/bad_habit/bad_habit.module';
import { TreatmentTypeModule } from './graphql/treatment_type/treatment_type.module';
import { ProblemTypeModule } from './graphql/problem_type/problem_type.module';
import { ProblemModule } from './problem/problem.module';


@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({

      formatError: (error: any) => {
        // console.log(error);
        const graphQLFormattedError = {
          message: error.message || "SERVER_ERROR",
          code: error.extensions?.code || error.code || 500,
          // path:error.path
          // name: error.extensions?.exception?.name || error.name || "name",
        };
        return graphQLFormattedError;
      },
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    DiseaseModule,
    BadHabitModule,
    TreatmentTypeModule,
    ProblemTypeModule,
    ProblemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
