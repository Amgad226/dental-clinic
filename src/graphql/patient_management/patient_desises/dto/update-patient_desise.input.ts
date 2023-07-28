import { CreatePatientDesiseInput } from './create-patient_desise.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientDesiseInput extends PartialType(CreatePatientDesiseInput) {
  @Field(() => Int)
  id: number;
}
