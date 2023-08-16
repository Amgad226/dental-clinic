import { Test, TestingModule } from '@nestjs/testing';
import { PatientReservationsResolver } from './patient_reservations.resolver';
import { PatientReservationsService } from './patient_reservations.service';

describe('PatientReservationsResolver', () => {
  let resolver: PatientReservationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientReservationsResolver, PatientReservationsService],
    }).compile();

    resolver = module.get<PatientReservationsResolver>(PatientReservationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
