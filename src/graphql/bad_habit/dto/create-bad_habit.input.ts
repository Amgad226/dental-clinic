import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBadHabitInput {
  @Field()
  name: string;
}
