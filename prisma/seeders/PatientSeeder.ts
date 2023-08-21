import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';
const prisma = new PrismaClient();

export async function seedPatient() {
  const amgad = await prisma.patient.upsert({
    where: { phone: '0945623246' },
    update: {},
    create: {
      name: 'Amgad Alwattar',
      gender: 'male',
      phone: '0945623246',
      address: 'ببيلا',
      birth_date: '16-12-2001',
      job: 'back-end developer',
      PatientDisease: {
        createMany: { data: [{ disease_id: 1, tight: true }] },
      },
      PatientBadHabet: {
        createMany: { data: [{ bad_habet_id: 1 }] },
      },
      PatientMedicine: {
        createMany: { data: [{ medicine_id: 1 }] },
      },
      PatientDiagnose: {
        createMany: {
          data: [
            {
              place: 'فك',
              expected_treatment: 'القيام ب تنضيف اللثة ',
              problem_id: 1,
            },
            {
              place: 'ضرس',
              expected_treatment: 'القيام ب حشوة  و تضيف  ',
              problem_id: 2,
            },
          ],
        },
      },
      PatientMedicalImage: {
        createMany: {
          data: [
            {
              medical_image_type_id: 1,
              src: 'sad',
              title: 'a sas da',
            },
          ],
        },
      },
    },
  });

  const ayham = await prisma.patient.upsert({
    where: { phone: '0951645425' },
    update: {},
    create: {
      name: 'Ayham Hammami',
      gender: 'female',
      phone: '0951645425',
      address: 'ضاحية الاسد',
      birth_date: '24-8-2001',
      job: 'full-stack developer',
      PatientDisease: {
        createMany: { data: [{ disease_id: 2, tight: true }] },
      },
      PatientBadHabet: {
        createMany: { data: [{ bad_habet_id: 2 }] },
      },
      PatientMedicine: {
        createMany: { data: [{ medicine_id: 2 }] },
      },
      PatientDiagnose: {
        createMany: {
          data: [
            {
              place: 'فك',
              expected_treatment: 'القيام ب تنضيف اللثة ',
              problem_id: 1,
            },
            {
              place: 'ضرس',
              expected_treatment: 'القيام ب حشوة  و تضيف  ',
              problem_id: 2,
            },
          ],
        },
      },
      PatientMedicalImage: {
        createMany: {
          data: [
            {
              medical_image_type_id: 2,
              src: 'sad',
              title: 'a sas da',
            },
          ],
        },
      },
    },
  });

  const doctor = await prisma.user.create({
    data: {
      otp: '3123',
      isVerified: true,
      phone: '0999999999',
      hashedPassword: await argon.hash('amgad123'),
      role_id: 2,
      hashedRefreshToken: await argon.hash(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInBob25lIjoiMDk0NTYyMzI0NiIsImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9qSXNJbkJvYjI1bElqb2lNRGswTlRZeU16STBOaUlzSW1saGRDSTZNVFk1TWpRMU5qTTBPQ3dpWlhod0lqb3hOamt5TlRReU56UTRmUS5Qb0cyWFd6RVZCQU04aWFqdUc5YTFiUHlDVlFfVF9XeEJ3eUZqbkVyalY0IiwiaWF0IjoxNjkyNDU2MzQ4LCJleHAiOjE2OTMwNjExNDh9.RFFpzol21lTq_5Ni1e-Zr-_SjbRIzscpMARbmXsmcag',
      ),
    },
  });

  const amgadUser = await prisma.user.create({
    data: {
      otp: '3123',
      isVerified: true,
      phone: '0945623246',
      hashedPassword: await argon.hash('amgad123'),
      hashedRefreshToken: await argon.hash(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInBob25lIjoiMDk0NTYyMzI0NiIsImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9qSXNJbkJvYjI1bElqb2lNRGswTlRZeU16STBOaUlzSW1saGRDSTZNVFk1TWpRMU5qTTBPQ3dpWlhod0lqb3hOamt5TlRReU56UTRmUS5Qb0cyWFd6RVZCQU04aWFqdUc5YTFiUHlDVlFfVF9XeEJ3eUZqbkVyalY0IiwiaWF0IjoxNjkyNDU2MzQ4LCJleHAiOjE2OTMwNjExNDh9.RFFpzol21lTq_5Ni1e-Zr-_SjbRIzscpMARbmXsmcag',
      ),
    },
  });

  const ayhamUser = await prisma.user.create({
    data: {
      otp: '3123',
      isVerified: true,
      phone: '0951645425',
      hashedRefreshToken: await argon.hash(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInBob25lIjoiMDk0NTYyMzI0NiIsImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9qSXNJbkJvYjI1bElqb2lNRGswTlRZeU16STBOaUlzSW1saGRDSTZNVFk1TWpRMU5qTTBPQ3dpWlhod0lqb3hOamt5TlRReU56UTRmUS5Qb0cyWFd6RVZCQU04aWFqdUc5YTFiUHlDVlFfVF9XeEJ3eUZqbkVyalY0IiwiaWF0IjoxNjkyNDU2MzQ4LCJleHAiOjE2OTMwNjExNDh9.RFFpzol21lTq_5Ni1e-Zr-_SjbRIzscpMARbmXsmcag',
      ),
      hashedPassword: await argon.hash('amgad123'),
    },
  });

  await prisma.patientUser.create({
    data: {
      patient_id: ayham.id,
      user_id: ayhamUser.id,
    },
  });

  await prisma.patientUser.create({
    data: {
      patient_id: amgad.id,
      user_id: amgadUser.id,
    },
  });
}

export async function seedPatientDiagnoses() {}

// patient diagnoses
// patient image
