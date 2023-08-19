import { Module } from '@nestjs/common';
import { PatientPerscrptionsMediciensService } from './patient_perscrptions_mediciens.service';
import { PatientPerscrptionsMediciensResolver } from './patient_perscrptions_mediciens.resolver';

@Module({
  providers: [PatientPerscrptionsMediciensResolver, PatientPerscrptionsMediciensService]
})
export class PatientPerscrptionsMediciensModule {}
