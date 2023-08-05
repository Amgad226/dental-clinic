import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Patient } from '../../patient/entities/patient.entity';

@ObjectType()
export class PatientPayment {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  amount: number;

  @Field(() => Date)
  date: Date

  @Field(() => String)
  description?: string

  @Field(() => String)
  patient_id: string

  @Field(() => Patient)
  Patient: Patient
}
