import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientReservationsService } from './patient_reservations.service';
import { PatientReservation } from './entities/patient_reservation.entity';
import { CreatePatientReservationInput } from './dto/create-patient_reservation.input';
import { UpdatePatientReservationInput } from './dto/update-patient_reservation.input';

@Resolver(() => PatientReservation)
export class PatientReservationsResolver {
  constructor(private readonly patientReservationsService: PatientReservationsService) {}

  @Mutation(() => PatientReservation)
  createPatientReservation(@Args('createPatientReservationInput') createPatientReservationInput: CreatePatientReservationInput) {
    return this.patientReservationsService.create(createPatientReservationInput);
  }

  @Query(() => [PatientReservation], { name: 'patientReservations' })
  findAll() {
    return this.patientReservationsService.findAll();
  }

  @Query(() => PatientReservation, { name: 'patientReservation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientReservationsService.findOne(id);
  }

  @Mutation(() => PatientReservation)
  updatePatientReservation(@Args('updatePatientReservationInput') updatePatientReservationInput: UpdatePatientReservationInput) {
    return this.patientReservationsService.update(updatePatientReservationInput.id, updatePatientReservationInput);
  }

  @Mutation(() => PatientReservation)
  removePatientReservation(@Args('id', { type: () => Int }) id: number) {
    return this.patientReservationsService.remove(id);
  }
}
