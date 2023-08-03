import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TreatmentService } from './treatment.service';
import { Treatment } from './entities/treatment.entity';
import { CreateTreatmentInput } from './dto/create-treatment.input';
import { UpdateTreatmentInput } from './dto/update-treatment.input';
import { paginateTreatment } from './entities/paginateTreatment';

@Resolver(() => Treatment)
export class TreatmentResolver {
  constructor(private readonly treatmentService: TreatmentService) {}

  @Mutation(() => Treatment)
  createTreatment(@Args('createTreatmentInput') createTreatmentInput: CreateTreatmentInput) {
    return this.treatmentService.create(createTreatmentInput);
  }

  @Query(() => paginateTreatment, { name: 'treatments' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const treatments = await this.treatmentService.findAll(page, item_per_page);
    return {
      items: treatments.data,
      totalPages: treatments.totalPages,
      page: page,
      item_per_page: item_per_page,
    };
  }

  @Query(() => Treatment, { name: 'treatment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentService.findOne(id);
  }

  @Mutation(() => Treatment)
  updateTreatment(
  @Args('id', { type: () => Int }) id: number,
  @Args('updateTreatmentInput') updateTreatmentInput: UpdateTreatmentInput) {
    return this.treatmentService.update(id, updateTreatmentInput);
  }

  @Mutation(() => Treatment)
  removeTreatment(@Args('id', { type: () => Int }) id: number) {
    return this.treatmentService.remove(id);
  }
}
