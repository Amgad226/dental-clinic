import { Injectable } from '@nestjs/common';
import { CreatePatientInput } from './dto/create-patient.input';
import { UpdatePatientInput } from './dto/update-patient.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';
import { GraphQLError } from 'graphql';
import { PatientDiseasesService } from '../patient_diseases/patient_diseases.service';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService, private patientDiseasesService: PatientDiseasesService) { }
  async create(createPatientInput: CreatePatientInput): Promise<Patient> {
    const { patient_diseases, patient_badHabits, ...rest } = createPatientInput
    const new_patient = await this.prisma.patient.create({
      include: {
        PatientDisease: true,
        PatientBadHabet: true
      },
      data: {
        ...rest,
        PatientDisease: {
          createMany: { data: [...patient_diseases] }
        },
        PatientBadHabet: { createMany: { data: [...patient_badHabits] } },
        // PatientMedicine  :{createMany : { data : [...patient_medicines]}}
      },
    });
    return new_patient
  }

  async findAll(page?: number, item_per_page?: number) {
    const data = await PaginatorService(this.prisma.patient
      , page, item_per_page, true, 'PatientDisease')

    console.log(data);

    return data
  }
  async findOne(id: number) {
    const patient = await this.prisma.patient.findUnique({
      where: { id }, include: {
        PatientDisease: { take: 3 }
      }
    })
    if (!patient) {
      throw new GraphQLError('patient not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return patient;
  }

  async update(id: number, updatePatientInput: UpdatePatientInput) {
    const patient = await this.prisma.patient.findUnique({ where: { id } })
    if (!patient) {
      throw new GraphQLError('patient not found', {
        extensions: {
          code: 404,
        },
      });
    }
    return await this.prisma.patient.update({
      where: { id },
      data: { ...updatePatientInput }
    });
  }

  async remove(id: number) {
    return await this.prisma.patient.delete({
      where: { id }
    });
  }
}
