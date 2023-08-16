import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkingHourInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
