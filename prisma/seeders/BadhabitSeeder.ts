import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedbadHabit() {
  const badHabits = [
    {
      name: 'تدخين',
      chemical_id:1
    },
    {
      name: 'كحولي',
      chemical_id:2

    },
    {
      name: 'بيمشي وهو نايم',
      chemical_id:2

    },
  ];

  for (const element of badHabits) {
    const existingBadHabit = await prisma.badHabit.findFirst({
      where: { name: element.name },
    });

    if (!existingBadHabit) {
      await prisma.badHabit.create({
        data: { 
            name: element.name ,
            badHabitChemicalMaterials:{
                create:{
                    chemical_material_id:element.chemical_id,
                    
                }
            }
        },
      });
    }
  }

//   if (
//     !(await prisma.badHabitChemicalMaterial.findFirst({
//       where: {
//         disease: {
//           name: 'تدخين',
//         },
//       },
//     }))
//   ) {
//     var chemical_material_id = [1];
//     await prisma.badHabitChemicalMaterial.create({
//       data: {
//         bad_habit_id,
//       },
//     });
//   }
}
