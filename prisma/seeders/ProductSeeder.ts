import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedProduct() {
  const products = [
    {
      id: 1,
      name: 'معجون سنان',
    },
    {
      id: 2,
      name: 'ابر',
    },
  ];

  for (const { id, name } of products) {
    const product = await prisma.product.upsert({
      where: { id },
      update: {},
      create: {
        name,
      },
    });
  }
}
