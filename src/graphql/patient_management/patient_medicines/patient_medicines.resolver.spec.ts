import { Test, TestingModule } from '@nestjs/testing';
import { PatientMedicinesResolver } from './patient_medicines.resolver';
import { PatientMedicinesService } from './patient_medicines.service';

describe('PatientMedicinesResolver', () => {
  let resolver: PatientMedicinesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMedicinesResolver, PatientMedicinesService],
    }).compile();

    resolver = module.get<PatientMedicinesResolver>(PatientMedicinesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
