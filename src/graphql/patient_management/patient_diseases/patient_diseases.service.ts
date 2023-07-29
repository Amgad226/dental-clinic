import { Injectable } from '@nestjs/common';
import { CreatePatientDiseaseInput } from './dto/create-patient_disease.input';
import { UpdatePatientDiseaseInput } from './dto/update-patient_disease.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class PatientDiseasesService {
  constructor(private prisma: PrismaService) { }

  async create(patient_id: number, createPatientDiseaseInput: CreatePatientDiseaseInput[]) {
    const patientExist = await this.prisma.patient.findUnique({ where: { id: patient_id } })
    if (!patientExist) {
      throw new GraphQLError('patient does not exist', {
        extensions: {
          code: 404,
        },
      })
    }
    const patient_diseases = await this.prisma.patientDisease.createMany({
      data: [
        ...createPatientDiseaseInput.map(({ disease_id, tight, notes }) => {
          return {
            patient_id,
            disease_id,
            tight,
            notes
          }
        })
      ]
    })

    return patient_diseases
  }

  findAll() {
    return `This action returns all patientDiseases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientDisease`;
  }

  update(id: number, updatePatientDiseaseInput: UpdatePatientDiseaseInput) {
    return `This action updates a #${id} patientDisease`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientDisease`;
  }
}
