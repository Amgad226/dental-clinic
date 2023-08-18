import { Injectable } from '@nestjs/common';
import { CreatePatientTreatmentDoneStepInput } from './dto/create-patient_treatment_done_step.input';
import { UpdatePatientTreatmentDoneStepInput } from './dto/update-patient_treatment_done_step.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientTreatmentDoneStepsService {
  constructor(private prisma: PrismaService) {
  }
  async create(createPatientTreatmentDoneStepInput: CreatePatientTreatmentDoneStepInput) {
    // return await this.prisma.patientTreatment.create({
    // });
  }

  async findAll() {
    return await `This action return awaits all patientTreatmentDoneSteps`;
  }

  async findOne(id: number) {
    return await `This action return awaits a #${id} patientTreatmentDoneStep`;
  }

  async update(id: number, updatePatientTreatmentDoneStepInput: UpdatePatientTreatmentDoneStepInput) {
    return await `This action updates a #${id} patientTreatmentDoneStep`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} patientTreatmentDoneStep`;
  }
}
