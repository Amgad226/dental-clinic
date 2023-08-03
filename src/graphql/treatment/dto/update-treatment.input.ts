import { CreateTreatmentInput } from './create-treatment.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateTreatmentInput extends PartialType(CreateTreatmentInput) {
  @Field(() => String)
  name: string;

  @Field(()=> Float)
  price:number;

  @Field(()=> String)
  color:string;

  @Field(()=> Int)
  treatment_type_id:number;
}
