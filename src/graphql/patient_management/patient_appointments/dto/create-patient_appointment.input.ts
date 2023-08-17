import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { AppointmentStates, AppointmentTypes } from '@prisma/client';
import { PatientSession } from '../../patient_sessions/entities/patient_session.entity';
import { Patient } from '../../patient/entities/patient.entity';


registerEnumType(AppointmentStates, {
  name: 'AppointmentStates'
});
registerEnumType(AppointmentTypes, {
  name: 'AppointmentTypes',
});
@InputType()
export class CreatePatientAppointmentInput {
  @Field(() => Int, { description: 'Patient id' })
  patient_id: number;

  @Field(() => String, { description: 'treatment place', nullable: true })
  place?: string;

  @Field(() => Date, { description: 'appointment date' })
  date: Date

  @Field(() => AppointmentTypes, { description: 'AppointmentTypes' })
  type: AppointmentTypes

  @Field(() => String, { description: 'phase', nullable: true })
  phase?: string

  @Field(() => String, { description: 'notes', nullable: true })
  notes?: string

}
