import { Injectable } from '@nestjs/common';
import { CreatePatientSessionInput } from './dto/create-patient_session.input';
import { UpdatePatientSessionInput } from './dto/update-patient_session.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientSessionsService {
  constructor(private prisma: PrismaService) { }

  async create({ createPatientTreatmentDoneStepInput, patient_id, patiient_appointment_id }: CreatePatientSessionInput) {
    const data = await this.prisma.patientSession.create({
      data: {
        patient_id,
        patiient_appointment_id
      },
    });
    await this.prisma.patientTreatmentDoneStep.createMany({
      data: [...createPatientTreatmentDoneStepInput.map((input) => {
        return {
          ...input,
          patient_session_id: data.id
        }
      })]
    })
    return data
  }

  async findAll({ patient_id }: { patient_id?: number }) {
    return await this.prisma.patientSession.findMany({
      where: {
        patient_id
      },
      include: {
        patient: true,
        patient_appointment: true,
        PatientTreatmentDoneStep: true,
        PatientLabOrder: true,
        PatientPerscrptions: true
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.patientSession.findUnique({
      where: { id },
      include: {
        patient: true,
        patient_appointment: true,
        PatientTreatmentDoneStep: true,
        PatientLabOrder: true,
        PatientPerscrptions: true
      }
    });
  }

  async update(id: number, updatePatientSessionInput: UpdatePatientSessionInput) {
    return await this.prisma.patientSession.update({
      where: { id },
      data: updatePatientSessionInput
    });
  }

  async remove(id: number) {
    return await this.prisma.patientSession.delete({
      where: {
        id
      }
    });
  }
}
