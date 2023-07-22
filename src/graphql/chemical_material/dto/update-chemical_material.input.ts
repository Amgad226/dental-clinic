import { CreateChemicalMaterialInput } from './create-chemical_material.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChemicalMaterialInput extends PartialType(CreateChemicalMaterialInput) {

  @Field(() => String, { description: 'Chemical Material' })
  name: string;
}
