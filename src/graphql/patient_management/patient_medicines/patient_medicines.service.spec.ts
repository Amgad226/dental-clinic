import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicinesService } from './patient_medicines.service';

describe('PatientMedicinesService', () => {
  let service: PatientMedicinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicinesService],
    }).compile();

    service = module.get<PatientMedicinesService>(PatientMedicinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
