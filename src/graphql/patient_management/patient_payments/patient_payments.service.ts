import { Injectable } from '@nestjs/common';
import { CreatePatientPaymentInput } from './dto/create-patient_payment.input';
import { UpdatePatientPaymentInput } from './dto/update-patient_payment.input';

@Injectable()
export class PatientPaymentsService {
  create(createPatientPaymentInput: CreatePatientPaymentInput) {
    return 'This action adds a new patientPayment';
  }

  findAll() {
    return `This action returns all patientPayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientPayment`;
  }

  update(id: number, updatePatientPaymentInput: UpdatePatientPaymentInput) {
    return `This action updates a #${id} patientPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientPayment`;
  }
}
