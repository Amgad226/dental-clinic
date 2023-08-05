import { Injectable } from '@nestjs/common';
import { CreatePatientPaymentInput } from './dto/create-patient_payment.input';
import { UpdatePatientPaymentInput } from './dto/update-patient_payment.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SortInput } from './dto/sort-input';

@Injectable()
export class PatientPaymentsService {
  constructor(private prisma: PrismaService) { }
  async create(createPatientPaymentInput: CreatePatientPaymentInput) {
    return this.prisma.patientPayment.create({
      data: { ...createPatientPaymentInput }
    });
  }

  async findAll({ patient_id, sort }: {
    patient_id?: number, sort?: SortInput
  }) {
    const { field, order } = sort ?? {}
    return this.prisma.patientPayment.findMany({
      where: {
        patient_id
      },
      orderBy: {
        [field]: order
      }
    });
  }

  // async findOne(id: number) {
  //   return `This action returns a #${id} patientPayment`;
  // }

  async update(id: number, updatePatientPaymentInput: UpdatePatientPaymentInput) {
    return this.prisma.patientPayment.update({
      where: { id },
      data: { ...updatePatientPaymentInput }
    });
  }

  async remove(id: number) {
    return this.prisma.patientPayment.delete({
      where: { id }
    });
  }
}
