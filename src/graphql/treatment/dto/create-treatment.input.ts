import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateTreatmentInput {
  @Field(() => String)
  name: string;

  @Field(()=> Float)
  price:number;

  @Field(()=> String)
  color:string;

  @Field(()=> Int)
  treatment_type_id:number;
}
