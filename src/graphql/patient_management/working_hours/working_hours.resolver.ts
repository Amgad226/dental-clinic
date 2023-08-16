import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkingHoursService } from './working_hours.service';
import { WorkingHour } from './entities/working_hour.entity';
import { CreateWorkingHourInput } from './dto/create-working_hour.input';
import { UpdateWorkingHourInput } from './dto/update-working_hour.input';

@Resolver(() => WorkingHour)
export class WorkingHoursResolver {
  constructor(private readonly workingHoursService: WorkingHoursService) {}

  @Mutation(() => WorkingHour)
  createWorkingHour(@Args('createWorkingHourInput') createWorkingHourInput: CreateWorkingHourInput) {
    return this.workingHoursService.create(createWorkingHourInput);
  }

  @Query(() => [WorkingHour], { name: 'workingHours' })
  findAll() {
    return this.workingHoursService.findAll();
  }

  @Query(() => WorkingHour, { name: 'workingHour' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workingHoursService.findOne(id);
  }

  @Mutation(() => WorkingHour)
  updateWorkingHour(@Args('updateWorkingHourInput') updateWorkingHourInput: UpdateWorkingHourInput) {
    return this.workingHoursService.update(updateWorkingHourInput.id, updateWorkingHourInput);
  }

  @Mutation(() => WorkingHour)
  removeWorkingHour(@Args('id', { type: () => Int }) id: number) {
    return this.workingHoursService.remove(id);
  }
}
