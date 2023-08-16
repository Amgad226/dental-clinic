import { Injectable } from '@nestjs/common';
import { CreateWorkingHourInput } from './dto/create-working_hour.input';
import { UpdateWorkingHourInput } from './dto/update-working_hour.input';

@Injectable()
export class WorkingHoursService {
  create(createWorkingHourInput: CreateWorkingHourInput) {
    return 'This action adds a new workingHour';
  }

  findAll() {
    return `This action returns all workingHours`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workingHour`;
  }

  update(id: number, updateWorkingHourInput: UpdateWorkingHourInput) {
    return `This action updates a #${id} workingHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} workingHour`;
  }
}
