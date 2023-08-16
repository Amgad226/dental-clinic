import { Injectable } from '@nestjs/common';
import { CreatePatientReservationInput } from './dto/create-patient_reservation.input';
import { UpdatePatientReservationInput } from './dto/update-patient_reservation.input';

@Injectable()
export class PatientReservationsService {
  create(createPatientReservationInput: CreatePatientReservationInput) {
    return 'This action adds a new patientReservation';
  }

  findAll() {
    return `This action returns all patientReservations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientReservation`;
  }

  update(id: number, updatePatientReservationInput: UpdatePatientReservationInput) {
    return `This action updates a #${id} patientReservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientReservation`;
  }
}
