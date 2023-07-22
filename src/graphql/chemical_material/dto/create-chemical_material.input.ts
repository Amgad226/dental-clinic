import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChemicalMaterialInput {
  
  @Field(() => String, { description: 'Chemical Material Name ' })
  name: string;


}

