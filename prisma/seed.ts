import { PrismaClient } from '@prisma/client'
import { seedRole } from './seeders/authSeeder';
import { seedDisease } from './seeders/diseaseSeeder';
import { seedChemicalMaterial } from './seeders/chemicalMaterial';
const prisma = new PrismaClient()
async function main() {
      
    seedRole();
    seedDisease()
    seedChemicalMaterial()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })