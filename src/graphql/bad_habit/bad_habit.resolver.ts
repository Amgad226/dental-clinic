import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BadHabitService } from './bad_habit.service';
import { BadHabit } from './entities/bad_habit.entity';
import { CreateBadHabitInput } from './dto/create-bad_habit.input';
import { UpdateBadHabitInput } from './dto/update-bad_habit.input';
import { Paginatebadhabit } from './entities/PAginatebadhabit';

@Resolver(() => BadHabit)
export class BadHabitResolver {
  constructor(private readonly badHabitService: BadHabitService) {}

  @Mutation(() => BadHabit)
  createBadHabit(@Args('createBadHabitInput') createBadHabitInput: CreateBadHabitInput) {
    return this.badHabitService.create(createBadHabitInput);
  }

  @Query(() =>Paginatebadhabit, { name: 'badHabits' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('search', { nullable: true }) serach?: string,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const badHabit = await this.badHabitService.findAll(
      page,
      item_per_page,
      serach,
    );
    return {
      items: badHabit.data,
      totalPages: badHabit.totalPages,
      page: badHabit.page,
      item_per_page: badHabit.item_per_page,
    };
  }

  @Query(() => BadHabit, { name: 'badHabit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.badHabitService.findOne(id);
  }

  @Mutation(() => BadHabit)
  updateBadHabit(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateBadHabitInput') updateBadHabitInput: UpdateBadHabitInput) {
    return this.badHabitService.update(id,updateBadHabitInput);
  }

  @Mutation(() => BadHabit)
  removeBadHabit(@Args('id', { type: () => Int }) id: number) {
    return this.badHabitService.remove(id);
  }
}
