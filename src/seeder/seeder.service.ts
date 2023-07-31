import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 

@Injectable()
export class SeederService {
  constructor(private readonly prisma: PrismaService) {}

  async seedDisease(): Promise<void> {
    await this.prisma.disease.createMany({
      data: [
        { name: 'John Doe' },
        { name: 'Jane Smith' },
      ],
      skipDuplicates: true, // Skip inserting if the record already exists
    });
  }
  async seeder(){
    this.seedDisease()
  }

  async freshDatabase(): Promise<void> {

      const tables = await this.prisma.$queryRaw` SELECT * FROM information_schema.tables WHERE table_schema = 'nestapp' `;
      
    await this.prisma.disease.deleteMany({});
    await this.prisma.badHabit.deleteMany({})
    await this.prisma.treatmentType.deleteMany({})
    await this.prisma.treatment.deleteMany({})
    await this.prisma.subStep.deleteMany({})
    await this.prisma.step.deleteMany({})
    await this.prisma.problemType.deleteMany({})
    await this.prisma.problem.deleteMany({})
    await this.prisma.medicineChemicalMaterial.deleteMany({})
    await this.prisma.medicine.deleteMany({})
    await this.prisma.diseaseChemicalMaterial.deleteMany({})
    await this.prisma.disease.deleteMany({})
    await this.prisma.chemicalMaterial.deleteMany({})
    await this.prisma.chemicalChemicalMaterial.deleteMany({})
    await this.prisma.category.deleteMany({})
    await this.prisma.badHabitChemicalMaterial.deleteMany({})
    await this.prisma.badHabit.deleteMany({})
  }


  async freshAndSeedDatabase(): Promise<String> {
    await this.freshDatabase(); // Call the freshDatabase function to reset the database
    await this.seeder();     // Call your seed functions to populate the database with data
    // Call other seed functions if needed
    return "done";
  }
}