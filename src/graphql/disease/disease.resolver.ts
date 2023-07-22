import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiseaseService } from './disease.service';
import { Disease } from './entities/disease.entity';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { Paginatedisease } from './entities/Paginatedisease';

@Resolver(() => Disease)
export class DiseaseResolver {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Mutation(() => Disease)
  createDisease(@Args('createDiseaseInput') createDiseaseInput: CreateDiseaseInput) {
    
    return this.diseaseService.create(createDiseaseInput);
  }

  @Query(() =>Paginatedisease, { name: 'diseases' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const disease = await this.diseaseService.findAll(page, item_per_page);
    return {
      items: disease.data,
      totalPages: disease.totalPages,
      page: page,
      item_per_page: item_per_page,
    };
  }

  @Query(() => Disease, { name: 'disease' })
  
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.diseaseService.findOne(id);
  }

  @Mutation(() => Disease)
  updateDisease(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateDiseaseInput') updateDiseaseInput: UpdateDiseaseInput) {
    return this.diseaseService.update(id,updateDiseaseInput);
  }



  @Mutation(() => Disease)
  removeDisease(@Args('id', { type: () => Int }) id: number) {
    return this.diseaseService.remove(id);
  }
}
