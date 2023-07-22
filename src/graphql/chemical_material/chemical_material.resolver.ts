import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChemicalMaterialService } from './chemical_material.service';
import { ChemicalMaterial } from './entities/chemical_material.entity';
import { CreateChemicalMaterialInput } from './dto/create-chemical_material.input';
import { UpdateChemicalMaterialInput } from './dto/update-chemical_material.input';
import { PaginateChemicalMaterial } from './entities/PaginateChemicalMaterial';

@Resolver(() => ChemicalMaterial)
export class ChemicalMaterialResolver {
  constructor(
    private readonly chemicalMaterialService: ChemicalMaterialService,
  ) {}

  @Mutation(() => ChemicalMaterial)
  createChemicalMaterial(
    @Args('createChemicalMaterialInput')
    createChemicalMaterialInput: CreateChemicalMaterialInput,
  ) {
    return this.chemicalMaterialService.create(createChemicalMaterialInput);
  }

  @Query(() => PaginateChemicalMaterial, { name: 'chemicalMaterials' })
  async findAll(
    @Args('page', { nullable: true }) page?: number,
    @Args('item_per_page', { nullable: true }) item_per_page?: number,
  ) {
    const chemicalMaterials = await this.chemicalMaterialService.findAll(
      page,
      item_per_page,
    );
    return {
      items: chemicalMaterials.data,
      totalPages: chemicalMaterials.totalPages,
      page: chemicalMaterials.page,
      item_per_page: chemicalMaterials.item_per_page,
    };
  }

  @Query(() => ChemicalMaterial, { name: 'chemicalMaterial' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    console.log(1);
    
    return this.chemicalMaterialService.findOne(id);
  }

  @Mutation(() => ChemicalMaterial)
  updateChemicalMaterial(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateChemicalMaterialInput')
    updateChemicalMaterialInput: UpdateChemicalMaterialInput,
  ) {
    return this.chemicalMaterialService.update(id, updateChemicalMaterialInput);
  }

  @Mutation(() => ChemicalMaterial)
  removeChemicalMaterial(@Args('id', { type: () => Int }) id: number) {
    return this.chemicalMaterialService.remove(id);
  }
}
