import { Injectable } from '@nestjs/common';
import { CreatePatientCostInput } from './dto/create-patient_cost.input';
import { UpdatePatientCostInput } from './dto/update-patient_cost.input';

@Injectable()
export class PatientCostsService {
  create(createPatientCostInput: CreatePatientCostInput) {
    return 'This action adds a new patientCost';
  }

  findAll() {
    return `This action returns all patientCosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientCost`;
  }

  update(id: number, updatePatientCostInput: UpdatePatientCostInput) {
    return `This action updates a #${id} patientCost`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientCost`;
  }
}
