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
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProblemTypeModule } from './graphql/problem_type/problem_type.module';
import { ProblemModule } from './problem/problem.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // formatError: (error: any) => {
      //   return {
      //     ...error.extensions.originalError
      //   };
      // },
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    DiseaseModule,
    BadHabitModule,
    TreatmentTypeModule,
    AuthModule,
    UserModule,
    ProblemTypeModule,
    ProblemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
