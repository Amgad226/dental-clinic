import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Category } from 'src/graphql/category/entities/category.entity';
import { ChemicalMaterial } from 'src/graphql/chemical_material/entities/chemical_material.entity';

@ObjectType()
export class Medicine {
  @Field(() => Int, { description: 'id field ' })
  id: number;

  @Field(() => String, { description: 'name field ' })
  name: string;

  @Field(() => Float, { description: 'concentration field ' })
  concentration: number;

  @Field(() => [Int], { description: 'chemical_material_id field ' })
  chemical_material_id:[number] 

  // @Field(() => ChemicalMaterial, { description: 'Problem_type' })
  // chemical_material: ChemicalMaterial;

  @Field(() => Int, { description: 'chemical_material_id field ' })
  category_id:number 

  @Field( ()=>Category,{ description: 'Problem_type' })
  category: Category;
}
