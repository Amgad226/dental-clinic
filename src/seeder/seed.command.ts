// src/seed.command.ts
import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SeederService } from './seeder.service'; 

@Injectable()
export class SeedCommand extends Command {
  constructor(private readonly seederService: SeederService) {
    super();
  }

  async run() {
    await this.seederService.freshAndSeedDatabase();
    console.log('Database fresh and seeded successfully.');
  }
}
