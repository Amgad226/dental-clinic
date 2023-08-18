import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedChemicalMaterial() {
  const chemicalMaterials = [
    {
      name: 'morphin',
    },
    {
      name: 'de_la_morphin',
    },
    {
      name: 'Helium',
    },
    {
      name: 'Lithium',
    },
    {
      name: 'Beryl',
    },
    {
      name: 'Borax',
    },
    {
      name: 'Carbo',
    },
    {
      name: 'Nitron',
    },
  ];

  for (const element of chemicalMaterials) {
    const existingDisease = await prisma.chemicalMaterial.findFirst({
      where: { name: element.name },
    });

    if (!existingDisease) {
      await prisma.chemicalMaterial.create({
        data: { name: element.name },
      });
    }
  }

  if (
    !await prisma.chemicalChemicalMaterial.findFirst({
      where: {
        chemical_material_1_id: 1,
      },
    })
  ) {
    var chemical_material_id = [2, 7];
    await prisma.chemicalChemicalMaterial.createMany({
      data: chemical_material_id.map((id) => ({
        chemical_material_1_id: 1,
        chemical_material_2_id: id,
      })),
      skipDuplicates: true,
    });

    var chemical_material_id = [3, 6, 7];
    await prisma.chemicalChemicalMaterial.createMany({
      data: chemical_material_id.map((id) => ({
        chemical_material_1_id: 2,
        chemical_material_2_id: id,
      })),
      skipDuplicates: true,
    });

    var chemical_material_id = [1, 5];
    await prisma.chemicalChemicalMaterial.createMany({
      data: chemical_material_id.map((id) => ({
        chemical_material_1_id: 4,
        chemical_material_2_id: id,
      })),
      skipDuplicates: true,
    });
  }
}
