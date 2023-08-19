import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function truncateDB() {
 
    await prisma.$queryRaw`SET foreign_key_checks=0`;
    await prisma.$queryRaw`TRUNCATE TABLE bad_habits_chemical_materials;`;
    await prisma.$queryRaw`TRUNCATE TABLE bad_habit;`;
    await prisma.$queryRaw`TRUNCATE TABLE book_ins;`;
    await prisma.$queryRaw`TRUNCATE TABLE book_outs;`;
    await prisma.$queryRaw`TRUNCATE TABLE categories;`;
    await prisma.$queryRaw`TRUNCATE TABLE chemical_materials;`;
    await prisma.$queryRaw`TRUNCATE TABLE chemical_materials_chemical_materials;`;
    await prisma.$queryRaw`TRUNCATE TABLE diagnoses;`;
    await prisma.$queryRaw`TRUNCATE TABLE diseases;`;
    await prisma.$queryRaw`TRUNCATE TABLE diseases_chemical_materials;`;
    await prisma.$queryRaw`TRUNCATE TABLE medical_images;`;
    await prisma.$queryRaw`TRUNCATE TABLE medical_images_types;`;
    await prisma.$queryRaw`TRUNCATE TABLE medicines;`;
    await prisma.$queryRaw`TRUNCATE TABLE medicines_chemical_materials;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_badHabits;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_costs;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_diseases;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_medicines;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_payments;`;
    await prisma.$queryRaw`TRUNCATE TABLE patients_teeth;`;
    await prisma.$queryRaw`TRUNCATE TABLE problem_types;`;
    await prisma.$queryRaw`TRUNCATE TABLE problems;`;
    await prisma.$queryRaw`TRUNCATE TABLE products;`;
    await prisma.$queryRaw`TRUNCATE TABLE steps;`;
    await prisma.$queryRaw`TRUNCATE TABLE stored_products;`;
    await prisma.$queryRaw`TRUNCATE TABLE subs_step;`;
    await prisma.$queryRaw`TRUNCATE TABLE teeth;`;
    await prisma.$queryRaw`TRUNCATE TABLE treatments;`;
    await prisma.$queryRaw`TRUNCATE TABLE treatments_types;`;
    await prisma.$queryRaw`TRUNCATE TABLE users;`;
    await prisma.$queryRaw`TRUNCATE TABLE roles;`;
    await prisma.$queryRaw`TRUNCATE TABLE users_patients;`;
  
    //   const table_names = await prisma.$queryRaw<
    //     Array<{ table_name: string }>
    //   >`SELECT table_name AS table_name FROM information_schema.tables WHERE table_schema = 'nestapp'`;
    //   console.log(table_names);
    //   // await prisma.$queryRaw`DELETE FROM bad_habit;`;
  
    //   for (let i = 0; i < table_names.length; i++) {
    //     const element = table_names[i].table_name;
    //     console.log(element);
  
    //     if (element !== '_prisma_migrations') {
    //       try {
    //         await prisma.$queryRaw`DELETE FROM `+element;;
    //       } catch (error) {
    //         console.log({ error });
    //       }
    //     }
    //   }
  }