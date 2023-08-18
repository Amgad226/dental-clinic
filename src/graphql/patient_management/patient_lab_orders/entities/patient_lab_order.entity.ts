import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PatientSession } from '../../patient_sessions/entities/patient_session.entity';
import { LabOrder } from 'src/graphql/lab_order/entities/lab_order.entity';

@ObjectType()
export class PatientLabOrder {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  patient_session_id: number;

  @Field(() => Int)
  lab_order_id: number;

  @Field(() => PatientSession)
  session: PatientSession;
  
  @Field(() => LabOrder)
  lab_order: LabOrder;
}
