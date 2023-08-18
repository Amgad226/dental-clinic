import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedDisease() {
  const diseases = [
    {
      name: 'مرض السكر',
    },
    {
      name: 'مرض  القلب',
    },
  ];


  for (const element of diseases) {
    const existingDisease = await prisma.disease.findFirst({
      where: { name: element.name },
    });

    if (!existingDisease) {
      await prisma.disease.create({
        data: { name: element.name },
      });
    }
  }



}
