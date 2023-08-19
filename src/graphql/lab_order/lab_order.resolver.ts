import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabOrderService } from './lab_order.service';
import { LabOrder } from './entities/lab_order.entity';
import { CreateLabOrderInput } from './dto/create-lab_order.input';
import { UpdateLabOrderInput } from './dto/update-lab_order.input';

@Resolver(() => LabOrder)
export class LabOrderResolver {
  constructor(private readonly labOrderService: LabOrderService) {}

  @Mutation(() => LabOrder)
  createLabOrder(@Args('createLabOrderInput') createLabOrderInput: CreateLabOrderInput) {
    return this.labOrderService.create(createLabOrderInput);
  }

  @Query(() => [LabOrder], { name: 'labOrder' })
  findAll() {
    return this.labOrderService.findAll();
  }

  @Query(() => LabOrder, { name: 'labOrder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labOrderService.findOne(id);
  }

  @Mutation(() => LabOrder)
  updateLabOrder(@Args('updateLabOrderInput') updateLabOrderInput: UpdateLabOrderInput) {
    return this.labOrderService.update(updateLabOrderInput.id, updateLabOrderInput);
  }

  @Mutation(() => LabOrder)
  removeLabOrder(@Args('id', { type: () => Int }) id: number) {
    return this.labOrderService.remove(id);
  }
}
