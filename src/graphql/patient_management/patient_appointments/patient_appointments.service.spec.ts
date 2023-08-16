import { Test, TestingModule } from '@nestjs/testing';
import { PatientAppointmentsService } from './patient_appointments.service';

describe('PatientAppointmentsService', () => {
  let service: PatientAppointmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientAppointmentsService],
    }).compile();

    service = module.get<PatientAppointmentsService>(PatientAppointmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
