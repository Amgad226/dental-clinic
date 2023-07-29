import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { ChemicalMaterialService } from './chemical_material.service';
import { ChemicalMaterial } from './entities/chemical_material.entity';
import { CreateChemicalMaterialInput } from './dto/create-chemical_material.input';
import { UpdateChemicalMaterialInput } from './dto/update-chemical_material.input';
import { PaginateChemicalMaterial } from './entities/PaginateChemicalMaterial';
import { checkIfChemicalsExists, updateChemical } from './validation/chemicals.validation';
import { checkIfExists, validator } from '../validatior/validator';


@Resolver(() => ChemicalMaterial)
export class ChemicalMaterialResolver {
  constructor(private readonly chemicalMaterialService: ChemicalMaterialService) { }

  @Mutation(() => ChemicalMaterial)
  async createChemicalMaterial(@Args('createChemicalMaterialInput') createChemicalMaterialInput: CreateChemicalMaterialInput) {

    await validator(checkIfChemicalsExists)({ data: createChemicalMaterialInput, modelName: "chemicalMaterial" })

    return this.chemicalMaterialService.create(createChemicalMaterialInput);
  }

  @Query(() => PaginateChemicalMaterial, { name: 'chemicalMaterials' })
  async findAll(@Args('page', { nullable: true }) page?: number, @Args('item_per_page', { nullable: true }) item_per_page?: number,) {


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
  async findOne(@Args('id', { type: () => Int }) id: number) {

    await validator(checkIfExists)({ id, modelName: "chemicalMaterial" })

    return this.chemicalMaterialService.findOne(id);
  }

  @Mutation(() => ChemicalMaterial)
  async updateChemicalMaterial(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateChemicalMaterialInput') updateChemicalMaterialInput: UpdateChemicalMaterialInput,
  ) {

    await validator(updateChemical)({ id: id, modelName: "chemicalMaterial", data: updateChemicalMaterialInput })

    throw Error('ewqqwe')
    
    // return this.chemicalMaterialService.update(id, updateChemicalMaterialInput);
  }

  @Mutation(() => ChemicalMaterial)
  async removeChemicalMaterial(@Args('id', { type: () => Int }) id: number) {
    await validator(checkIfExists)({ id, modelName: "chemicalMaterial" })

    return this.chemicalMaterialService.remove(id);
  }
}
