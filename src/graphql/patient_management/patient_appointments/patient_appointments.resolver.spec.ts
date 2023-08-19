import { Test, TestingModule } from '@nestjs/testing';
import { PatientAppointmentsResolver } from './patient_appointments.resolver';
import { PatientAppointmentsService } from './patient_appointments.service';

describe('PatientAppointmentsResolver', () => {
  let resolver: PatientAppointmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientAppointmentsResolver, PatientAppointmentsService],
    }).compile();

    resolver = module.get<PatientAppointmentsResolver>(PatientAppointmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
