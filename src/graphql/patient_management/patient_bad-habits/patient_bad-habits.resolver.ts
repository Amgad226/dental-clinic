import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientBadHabitsService } from './patient_bad-habits.service';
import { PatientBadHabit } from './entities/patient_bad-habit.entity';
import { CreatePatientBadHabitInput } from './dto/create-patient_bad-habit.input';
import { UpdatePatientBadHabitInput } from './dto/update-patient_bad-habit.input';

@Resolver(() => PatientBadHabit)
export class PatientBadHabitsResolver {
  constructor(private readonly patientBadHabitsService: PatientBadHabitsService) {}

  @Mutation(() => PatientBadHabit)
  createPatientBadHabit(@Args('createPatientBadHabitInput') createPatientBadHabitInput: CreatePatientBadHabitInput) {
    return this.patientBadHabitsService.create(createPatientBadHabitInput);
  }

  @Query(() => [PatientBadHabit], { name: 'patientBadHabits' })
  findAll() {
    return this.patientBadHabitsService.findAll();
  }

  @Query(() => PatientBadHabit, { name: 'patientBadHabit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientBadHabitsService.findOne(id);
  }

  @Mutation(() => PatientBadHabit)
  updatePatientBadHabit(@Args('updatePatientBadHabitInput') updatePatientBadHabitInput: UpdatePatientBadHabitInput) {
    return this.patientBadHabitsService.update(updatePatientBadHabitInput.id, updatePatientBadHabitInput);
  }

  @Mutation(() => PatientBadHabit)
  removePatientBadHabit(@Args('id', { type: () => Int }) id: number) {
    return this.patientBadHabitsService.remove(id);
  }
}
