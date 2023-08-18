import { Injectable } from '@nestjs/common';
import { CreatePatientPerscrptionsMedicienInput } from './dto/create-patient_perscrptions_medicien.input';
import { UpdatePatientPerscrptionsMedicienInput } from './dto/update-patient_perscrptions_medicien.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientPerscrptionsMediciensService {
  constructor(private prisma: PrismaService) { }

  async create(createPatientPerscrptionsMedicienInput: CreatePatientPerscrptionsMedicienInput) {
    return await this.prisma.patientPerscrptionsMedicince.create({
      data: createPatientPerscrptionsMedicienInput
    })
  }

  async findAll({ patient_perscrption_id }: { patient_perscrption_id?: number }) {
    return await this.prisma.patientPerscrptionsMedicince.findMany({
      where: {
        patient_perscrption_id
      },
      include: {
        medicince: true,
        perscrption: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.patientPerscrptionsMedicince.findUnique({
      where: { id }
    });
  }

  async update(id: number, updatePatientPerscrptionsMedicienInput: UpdatePatientPerscrptionsMedicienInput) {
    return await this.prisma.patientPerscrptionsMedicince.update({
      data: updatePatientPerscrptionsMedicienInput,
      where: { id }
    })
  }

  async remove(id: number) {
    return await this.prisma.patientPerscrptionsMedicince.delete({
      where: { id }
    })
  }
}
