import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiseaseService } from './disease.service';
import { Disease } from './entities/disease.entity';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { graphQLWrapper } from 'src/utils';

@Resolver(() => Disease)
export class DiseaseResolver {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Mutation(() => Disease)
  createDisease(@Args('createDiseaseInput') createDiseaseInput: CreateDiseaseInput) {
    
    return this.diseaseService.create(createDiseaseInput);
  }

  @Query(() => [Disease], { name: 'diseases' })
  findAll() {
    return graphQLWrapper(async () => {
      return this.diseaseService.findAll();
    })();
  }

  @Query(() => Disease, { name: 'disease' })
  
  findOne(@Args('id', { type: () => Int }) id: number) {
    return graphQLWrapper(async () => {

        return this.diseaseService.findOne(id);
  })();

  }

  @Mutation(() => Disease)
  updateDisease(@Args('updateDiseaseInput') updateDiseaseInput: UpdateDiseaseInput) {
    return graphQLWrapper(async () => {
      
      return this.diseaseService.update(updateDiseaseInput.id, updateDiseaseInput);
    })();
  }



  @Mutation(() => Disease)
  async removeDisease(@Args('id', { type: () => Int }) id: number) {
    return graphQLWrapper(async () => {
      const result = await this.diseaseService.remove(id);
      return result;
    })();
  }
}
