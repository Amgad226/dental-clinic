import { PatientTreatmentStatuses, PatientTreatmentTypes, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedTreatmentType() {
  const treatments = [
    {
      id: 1,
      name: 'فكية',
    },
    {
      id: 2,
      name: 'جراحة',
    },
    {
      id: 3,
      name: 'تجميل',
    },
  ];

  for (const { name, id } of treatments) {
    console.log(name);

    await prisma.treatmentType.upsert({
      where: { id },
      update: {},
      create: {
        name,
      },
    });
  }
}

export async function seedTreatment() {
  const treatments = [
    {
      id: 1,
      name: 'قلع',
      color: 'red',
      price: 1200,
      treatment_type_id: 1,
    },
    {
      id: 2,
      name: 'نخر',
      color: 'blue',
      price: 2200,
      treatment_type_id: 1,
    },
    {
      id: 3,
      name: 'تلبيس',
      color: 'green',
      price: 1400,
      treatment_type_id: 2,
    },
    {
      id: 4,
      name: 'زرع سنان',
      color: 'yellow',
      price: 12400,
      treatment_type_id: 2,
    },
  ];
  for (const { color, name, id, price, treatment_type_id } of treatments) {
    await prisma.treatment.upsert({
      where: { id },
      update: {},
      create: {
        name,
        color,
        price,
        treatment_type_id,
      },
    });
  }
}

export async function seedPatientTreatment() {
  const patientsTreatments = [
    {
      id: 1,
      patient_id: 1,
      treatment_id: 1,
      place: 'في الاسنان العلوية فوق يمين زاوية',
      price: 3112.123,
      type: PatientTreatmentTypes.teethly,
      status: PatientTreatmentStatuses.ongoing,
    },
    {
      id: 2,
      patient_id: 2,
      treatment_id: 1,
      place: 'في الاسنان العلوية فوق يمين زاوية + الخد اليساري',
      price:2132.34,
      type: PatientTreatmentTypes.teethly,
      status: PatientTreatmentStatuses.done,
    },
    {
      id: 3,
      patient_id: 1,
      treatment_id: 3,
      place: 'مكان مجهور  بالفم ',
      price: 30000.30,
      type: PatientTreatmentTypes.unteethly,
      status: PatientTreatmentStatuses.ongoing,
    },
  ];

  for (const { id,...rest } of patientsTreatments) {
    await prisma.patientTreatment.upsert({
      where: { id },
      update: {},
      create: {
        ...rest,
      },
    });
  }
}
