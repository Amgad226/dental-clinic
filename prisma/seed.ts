import { PrismaClient } from '@prisma/client';
import { seedRole } from './seeders/RoleSeeder';
import { seedDisease } from './seeders/diseaseSeeder';
import { seedChemicalMaterial } from './seeders/chemicalMaterial';
import { seedCategory } from './seeders/CategorySeeder';
import { seedMedicines } from './seeders/medicineSeeder';
import { seedbadHabit } from './seeders/BadhabitSeeder';
import { seedPatient } from './seeders/PatientSeeder';
import { truncateDB } from './seeders/TruncateSeeder';
const prisma = new PrismaClient();

async function main() {
  await truncateDB();
  await seedRole();
  await seedCategory();
  await seedChemicalMaterial()
  await seedDisease()
  await seedbadHabit()
  await seedMedicines()
  await seedPatient()
  // tratment 
  // step 
  // mediceine 
  // workinour

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
