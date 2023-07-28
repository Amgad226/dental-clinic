import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientBadHabitInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
