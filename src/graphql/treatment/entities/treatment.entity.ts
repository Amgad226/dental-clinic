import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { TreatmentType } from 'src/graphql/treatment_type/entities/treatment_type.entity';
import { Steps } from '../dto/step.entity';
import { SubStep } from '../dto/sub_step.entity';

@ObjectType()
export class Treatment {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(()=> Float)
  price:number;

  @Field(()=> String)
  color:string;

  @Field(() => Int)
  treatment_type_id: number;

  @Field(() => TreatmentType)
  treatment_type: TreatmentType;

  
  @Field(() => [Steps])
  steps?: Steps[];
}
