import { PrismaClient } from '@prisma/client';
import { seedRole } from './seeders/RoleSeeder';
import { seedDisease } from './seeders/diseaseSeeder';
import { seedChemicalMaterial } from './seeders/chemicalMaterial';
import { seedCategory } from './seeders/CategorySeeder';
import { seedMedicines } from './seeders/medicineSeeder';
import { seedbadHabit } from './seeders/BadhabitSeeder';
import { seedPatient } from './seeders/PatientSeeder';
import { truncateDB } from './seeders/TruncateSeeder';
import { seedTreatment, seedTreatmentType } from './seeders/TreatmentSeeder';
import { seedStep, seedSubStep } from './seeders/StepSeeder';
import { seedWorkingHour } from './seeders/WorkingHourSeeder';
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
  await seedTreatmentType()
  await seedTreatment()
  await seedStep()
  await seedSubStep()
  await seedWorkingHour()

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
