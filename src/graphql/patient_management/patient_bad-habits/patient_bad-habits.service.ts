import { Injectable } from '@nestjs/common';
import { CreatePatientBadHabitInput } from './dto/create-patient_bad-habit.input';
import { UpdatePatientBadHabitInput } from './dto/update-patient_bad-habit.input';

@Injectable()
export class PatientBadHabitsService {
  create(createPatientBadHabitInput: CreatePatientBadHabitInput) {
    return 'This action adds a new patientBadHabit';
  }

  findAll() {
    return `This action returns all patientBadHabits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientBadHabit`;
  }

  update(id: number, updatePatientBadHabitInput: UpdatePatientBadHabitInput) {
    return `This action updates a #${id} patientBadHabit`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientBadHabit`;
  }
}
