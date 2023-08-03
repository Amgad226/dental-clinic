import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Steps } from "./step.entity";

@ObjectType()
export class SubStep {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  step_id: number;
}
