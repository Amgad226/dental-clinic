import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
