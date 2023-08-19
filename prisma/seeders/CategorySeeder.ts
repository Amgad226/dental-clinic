import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedCategory() {
  const categories = [
    {
      name: 'حبة',
    },
    {
      name: 'شراب',
    },
    {
      name: 'ابرة',
    },
    {
      name: 'نوع مو معروف',
    },
  ];

  for (const element of categories) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: element.name },
    });

    if (existingCategory==null) {
      await prisma.category.create({
        data: { name: element.name },
      });
    }
  }
}
