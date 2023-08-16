import { Injectable } from '@nestjs/common';
import { CreatePatientAppointmentInput } from './dto/create-patient_appointment.input';
import { UpdatePatientAppointmentInput } from './dto/update-patient_appointment.input';

@Injectable()
export class PatientAppointmentsService {
  create(createPatientAppointmentInput: CreatePatientAppointmentInput) {
    return 'This action adds a new patientAppointment';
  }

  findAll() {
    return `This action returns all patientAppointments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientAppointment`;
  }

  update(id: number, updatePatientAppointmentInput: UpdatePatientAppointmentInput) {
    return `This action updates a #${id} patientAppointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientAppointment`;
  }
}
