import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicineService } from './medicine.service';
import { Medicine } from './entities/medicine.entity';
import { CreateMedicineInput } from './dto/create-medicine.input';
import { UpdateMedicineInput } from './dto/update-medicine.input';
import { paginateMedicine } from './entities/paginateMedicine';

@Resolver(() => Medicine)
export class MedicineResolver {
  constructor(private readonly medicineService: MedicineService) {}

  @Mutation(() => Medicine)
  createMedicine(
    @Args('createMedicineInput') createMedicineInput: CreateMedicineInput,
  ) {
    return this.medicineService.create(createMedicineInput);
  }

  @Query(() => paginateMedicine, { name: 'medicines' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const medicines= await this.medicineService.findAll(page,item_per_page);
    return {
      items: medicines.data,
      totalPages: medicines.totalPages,
      page: medicines.page,
      item_per_page: medicines.item_per_page,
    };
  }

  @Query(() => Medicine, { name: 'medicine' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicineService.findOne(id);
  }

  @Mutation(() => Medicine)
  updateMedicine(
    @Args('id') id: number,
    @Args('updateMedicineInput') updateMedicineInput: UpdateMedicineInput,
  ) {
    return this.medicineService.update(id, updateMedicineInput);
  }

  @Mutation(() => Medicine)
  removeMedicine(@Args('id', { type: () => Int }) id: number) {
    return this.medicineService.remove(id);
  }
}
