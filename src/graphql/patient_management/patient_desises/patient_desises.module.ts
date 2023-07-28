import { Module } from '@nestjs/common';
import { PatientDesisesService } from './patient_desises.service';
import { PatientDesisesResolver } from './patient_desises.resolver';

@Module({
  providers: [PatientDesisesResolver, PatientDesisesService]
})
export class PatientDesisesModule {}
