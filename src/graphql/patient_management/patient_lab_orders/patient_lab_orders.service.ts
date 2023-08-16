import { Injectable } from '@nestjs/common';
import { CreatePatientLabOrderInput } from './dto/create-patient_lab_order.input';
import { UpdatePatientLabOrderInput } from './dto/update-patient_lab_order.input';

@Injectable()
export class PatientLabOrdersService {
  create(createPatientLabOrderInput: CreatePatientLabOrderInput) {
    return 'This action adds a new patientLabOrder';
  }

  findAll() {
    return `This action returns all patientLabOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientLabOrder`;
  }

  update(id: number, updatePatientLabOrderInput: UpdatePatientLabOrderInput) {
    return `This action updates a #${id} patientLabOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientLabOrder`;
  }
}
