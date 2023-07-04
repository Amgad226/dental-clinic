import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BadHabitService } from './bad_habit.service';
import { BadHabit } from './entities/bad_habit.entity';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';

@Resolver(() => BadHabit)
export class BadHabitResolver {
  constructor(private readonly badHabitService: BadHabitService) {}

  @Mutation(() => BadHabit)
  createBadHabit(@Args('createBadHabitInput') createBadHabitInput: CreateBadHabitInput) {
    return this.badHabitService.create(createBadHabitInput);
  }

  @Query(() => [BadHabit], { name: 'badHabits' })
  findAll() {
    return this.badHabitService.findAll();
  }

  @Query(() => BadHabit, { name: 'badHabit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.badHabitService.findOne(id);
  }

  @Mutation(() => BadHabit)
  updateBadHabit(@Args('updateBadHabitInput') updateBadHabitInput: UpdateBadHabitInput) {
    return this.badHabitService.update(updateBadHabitInput.id, updateBadHabitInput);
  }

  @Mutation(() => BadHabit)
  removeBadHabit(@Args('id', { type: () => Int }) id: number) {
    return this.badHabitService.remove(id);
  }
}
