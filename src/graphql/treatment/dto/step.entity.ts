import { Field, Int, ObjectType } from "@nestjs/graphql";
import { SubStep } from "./sub_step.entity";
import { Treatment } from "../entities/treatment.entity";

@ObjectType()
export class Steps {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  treatment_id: number;

  @Field(() => [SubStep],{ nullable: true })
  SubStep?: SubStep[];
}
