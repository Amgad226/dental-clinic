import { Injectable } from '@nestjs/common';
import { CreatePatientReservationInput } from './dto/create-patient_reservation.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientReservationsService {
  constructor(private prisma: PrismaService) { }

  async create({ patient_id, date, notes }: CreatePatientReservationInput) {
    const patient_reservations_count = await this.prisma.patientReservation.count({
      where: { patient_id },
    })
    if (patient_reservations_count > 0) {
      throw new Error('patient can not have more than 1 onHold reservation')
    }
    if (date < new Date(Date.now())) {
      throw new Error('Date must greater than now date');
    }
    return await this.prisma.patientReservation.create({
      data: {
        date, notes, patient_id,
      },
      include: { patient: true }
    });
  }

  async findAll({ patient_id }: { patient_id?: number }) {
    return await this.prisma.patientReservation.findMany({
      where: { patient_id }
    });
  }

  async remove(id: number) {
    return await this.prisma.patientReservation.delete({
      where: {
        id
      }
    });
  }
}
