import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePatientMedicalImageInput {
  @Field(() => String)
  src: string;

  @Field(() => String)
  title: string

  @Field(() => Int)
  patient_id: number;

  @Field(() => Int)
  medical_image_type_id: number;
}
