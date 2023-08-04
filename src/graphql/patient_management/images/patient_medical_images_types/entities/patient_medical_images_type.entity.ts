import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientMedicalImagesType {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string
}
