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
import { ChemicalMaterialModule } from './graphql/chemical_material/chemical_material.module';
import { ConfigModule } from '@nestjs/config';
import { TreatmentModule } from './graphql/treatment/treatment.module';
import { MedicineModule } from './graphql/medicine/medicine.module';
import { CategoryModule } from './graphql/category/category.module';
import { PatientModule } from './graphql/patient_management/patient/patient.module';
import { PatientBadHabitsModule } from './graphql/patient_management/patient_bad-habits/patient_bad-habits.module';
import { PatientMedicinesModule } from './graphql/patient_management/patient_medicines/patient_medicines.module';
import { PatientPaymentsModule } from './graphql/patient_management/patient_payments/patient_payments.module';
import { PatientCostsModule } from './graphql/patient_management/patient_costs/patient_costs.module';
import { PatientDiagnosesModule } from './graphql/patient_management/patient_diagnoses/patient_diagnoses.module';
import { PatientMedicalImagesModule } from './graphql/patient_management/images/patient_medical_images/patient_medical_images.module';
import { PatientMedicalImagesTypesModule } from './graphql/patient_management/images/patient_medical_images_types/patient_medical_images_types.module';
import { PatientTeethTreatmentsModule } from './graphql/patient_management/patient_teeth_treatments/patient_teeth_treatments.module';
import { PatientDiseasesModule } from './graphql/patient_management/patient_diseases/patient_diseases.module';


const apolloDriverConfig: ApolloDriverConfig = {
  formatError: (error: any) => {
    const graphQLFormattedError = {
      message: error.message || 'SERVER_ERROR',
      code: error.extensions?.code || error.code || 500,
    };
    return graphQLFormattedError;
  },
  driver: ApolloDriver,

  playground: true,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
  status400ForVariableCoercionErrors: true,
  includeStacktraceInErrorResponses: true

};

const graphQLModuleConfig: any = {
  ...apolloDriverConfig,
};
@Module({

  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(graphQLModuleConfig),
    DiseaseModule,
    BadHabitModule,
    TreatmentTypeModule,
    ProblemTypeModule,
    ProblemModule,
    ChemicalMaterialModule,
    TreatmentModule,
    MedicineModule,
    CategoryModule,
    PatientModule,
    PatientBadHabitsModule,
    PatientMedicinesModule,
    PatientPaymentsModule,
    PatientCostsModule,
    PatientDiagnosesModule,
    PatientMedicalImagesModule,
    PatientMedicalImagesTypesModule,
    PatientTeethTreatmentsModule,
    PatientDiseasesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
