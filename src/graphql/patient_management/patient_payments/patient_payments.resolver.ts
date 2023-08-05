import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientPaymentsService } from './patient_payments.service';
import { PatientPayment } from './entities/patient_payment.entity';
import { CreatePatientPaymentInput } from './dto/create-patient_payment.input';
import { UpdatePatientPaymentInput } from './dto/update-patient_payment.input';
import { SortInput } from './dto/sort-input';

@Resolver(() => PatientPayment)
export class PatientPaymentsResolver {
  constructor(private readonly patientPaymentsService: PatientPaymentsService) { }

  @Mutation(() => PatientPayment)
  createPatientPayment(@Args('createPatientPaymentInput') createPatientPaymentInput: CreatePatientPaymentInput) {
    return this.patientPaymentsService.create(createPatientPaymentInput);
  }

  @Query(() => [PatientPayment], { name: 'patientPayments' })
  findAll(
    @Args('patient_id', { type: () => Int, nullable: true }) patient_id?: number,
    @Args('sort', { type: () => SortInput, nullable: true }) sort?: SortInput
  ) {
    return this.patientPaymentsService.findAll({ patient_id, sort });
  }

  // @Query(() => PatientPayment, { name: 'patientPayment' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.patientPaymentsService.findOne(id);
  // }

  @Mutation(() => PatientPayment)
  updatePatientPayment(@Args('updatePatientPaymentInput') updatePatientPaymentInput: UpdatePatientPaymentInput) {
    return this.patientPaymentsService.update(updatePatientPaymentInput.id, updatePatientPaymentInput);
  }

  @Mutation(() => PatientPayment)
  removePatientPayment(@Args('id', { type: () => Int }) id: number) {
    return this.patientPaymentsService.remove(id);
  }
}
