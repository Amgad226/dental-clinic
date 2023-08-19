import { PrismaClient } from '@prisma/client';
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
    },
  });

  const amgadUser = await prisma.user.create({
    data: {
      otp: '3123',
      isVerified: true,
      phone: '0945623246',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$kjygC9LKmU40pmncToerJw$yQQfpI3+tIbvP96HMVCbKjNW7U5qHRaHXkJn7L5sEkY',
      //amgad123
    },
  });

  const ayhamUser = await prisma.user.create({
    data: {
      otp: '3123',
      isVerified: true,
      phone: '0951645425',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$kjygC9LKmU40pmncToerJw$yQQfpI3+tIbvP96HMVCbKjNW7U5qHRaHXkJn7L5sEkY',
      //amgad123
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
