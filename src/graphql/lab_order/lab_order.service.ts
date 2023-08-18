import { Injectable } from '@nestjs/common';
import { CreateLabOrderInput } from './dto/create-lab_order.input';
import { UpdateLabOrderInput } from './dto/update-lab_order.input';

@Injectable()
export class LabOrderService {
  create(createLabOrderInput: CreateLabOrderInput) {
    return 'This action adds a new labOrder';
  }

  findAll() {
    return `This action returns all labOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labOrder`;
  }

  update(id: number, updateLabOrderInput: UpdateLabOrderInput) {
    return `This action updates a #${id} labOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} labOrder`;
  }
}
