import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedDisease() {
  const diseases = [
    {
      name: 'مرض السكر',
      chemical_id:2

    },
    {
      name: 'مرض  القلب',
      chemical_id:3

    },
  ];


  for (const element of diseases) {
    const existingDisease = await prisma.disease.findFirst({
      where: { name: element.name },
    });

    if (!existingDisease) {
      await prisma.disease.create({
        data: { 
          name: element.name,
          diseaseChemicalMaterials:{
          create:{
            chemical_material_id:element.chemical_id,
          }
        } },
      });
    }
  }



}
