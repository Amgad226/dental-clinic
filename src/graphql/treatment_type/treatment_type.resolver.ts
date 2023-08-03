import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TreatmentTypeService } from './treatment_type.service';
import { TreatmentType } from './entities/treatment_type.entity';
import { CreateTreatmentTypeInput } from './dto/create-treatment_type.input';
import { UpdateTreatmentTypeInput } from './dto/update-treatment_type.input';

@Resolver(() => TreatmentType)
export class TreatmentTypeResolver {
  constructor(private readonly treatmentTypeService: TreatmentTypeService) {}

  @Mutation(() => TreatmentType)
  createTreatmentType(@Args('createTreatmentTypeInput') createTreatmentTypeInput: CreateTreatmentTypeInput) {
    return this.treatmentTypeService.create(createTreatmentTypeInput);
  }

  @Query(() => [TreatmentType], { name: 'treatmentTypes' })
  findAll() {
    return this.treatmentTypeService.findAll();
  }

  @Query(() => TreatmentType, { name: 'treatmentType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentTypeService.findOne(id);
  }

  @Mutation(() => TreatmentType)
  updateTreatmentType(
  @Args('id', { type: () => Int }) id: number,
  @Args('updateTreatmentTypeInput') updateTreatmentTypeInput: UpdateTreatmentTypeInput) {
    return this.treatmentTypeService.update(id, updateTreatmentTypeInput);
  }

  @Mutation(() => TreatmentType)
  removeTreatmentType(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentTypeService.remove(id);
  }
}
