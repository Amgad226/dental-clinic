import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientCostsService } from './patient_costs.service';
import { PatientCost } from './entities/patient_cost.entity';
import { CreatePatientCostInput } from './dto/create-patient_cost.input';
import { UpdatePatientCostInput } from './dto/update-patient_cost.input';

@Resolver(() => PatientCost)
export class PatientCostsResolver {
  constructor(private readonly patientCostsService: PatientCostsService) {}

  @Mutation(() => PatientCost)
  createPatientCost(@Args('createPatientCostInput') createPatientCostInput: CreatePatientCostInput) {
    return this.patientCostsService.create(createPatientCostInput);
  }

  @Query(() => [PatientCost], { name: 'patientCosts' })
  findAll() {
    return this.patientCostsService.findAll();
  }

  @Query(() => PatientCost, { name: 'patientCost' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientCostsService.findOne(id);
  }

  @Mutation(() => PatientCost)
  updatePatientCost(@Args('updatePatientCostInput') updatePatientCostInput: UpdatePatientCostInput) {
    return this.patientCostsService.update(updatePatientCostInput.id, updatePatientCostInput);
  }

  @Mutation(() => PatientCost)
  removePatientCost(@Args('id', { type: () => Int }) id: number) {
    return this.patientCostsService.remove(id);
  }
}
