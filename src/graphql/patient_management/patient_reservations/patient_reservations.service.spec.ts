import { Test, TestingModule } from '@nestjs/testing';
import { PatientReservationsService } from './patient_reservations.service';

describe('PatientReservationsService', () => {
  let service: PatientReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientReservationsService],
    }).compile();

    service = module.get<PatientReservationsService>(PatientReservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
