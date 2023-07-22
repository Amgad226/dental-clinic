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
import { AccessTokenGuard } from './auth/guards/accessToken.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomGqlExceptionFilter } from './middlewares/GraphqlErrorMiddleware';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoTransformHttpErrors: true,
      // formatError: (error: any) => {
      //   // throw new Error({ ...error.extensions.originalError })
      //   return {
      //     ...error.extensions.originalError
      //   };
      // },
      includeStacktraceInErrorResponses: false,
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
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
  providers: [AppService
    , {
      provide: APP_GUARD, useClass: AccessTokenGuard
    }
  ],
})
export class AppModule { }
