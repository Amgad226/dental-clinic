import { CreateBadHabitInput } from './create-bad_habit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBadHabitInput extends PartialType(CreateBadHabitInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
