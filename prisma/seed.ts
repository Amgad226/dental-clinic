import { PrismaClient } from '@prisma/client'
import { seedRole } from './seeders/authSeeder';
import { seedDisease } from './seeders/diseaseSeeder';
const prisma = new PrismaClient()
async function main() {
      
    seedRole();
    seedDisease()
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