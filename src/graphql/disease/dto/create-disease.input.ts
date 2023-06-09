import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiseaseInput {
  @Field()
  name: string;
}
