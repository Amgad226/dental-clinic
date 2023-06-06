import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseDto } from './dto';

@Controller('disease')
export class DiseaseController {
  constructor(private diseaseService: DiseaseService) {}

  //Get Disease
  @Get('all')
  treatment_type() {
    return this.diseaseService.findAll();
  }

  //Create Disease
  @UsePipes(ValidationPipe)
  @Post('create')
  async create(@Body() body : DiseaseDto){
      return await this.diseaseService.create(body);
  }

  //Update Disease
  @UsePipes(ValidationPipe)
  @Patch('update/:id')
  async update(@Param('id',ParseIntPipe) id , @Body() body :DiseaseDto){
      return await this.diseaseService.update(id,body);
  }

  //Show Disease 
  @UsePipes(ValidationPipe)
  @Get("show/:id")
   show(@Param ('id',ParseIntPipe) id ){
      return  this.diseaseService.show(id);
  }

  //Delete TreatmentType
  @UsePipes(ValidationPipe)
  @Delete('delete/:id')
  async delete (@Param('id',ParseIntPipe) id){
      return await this.diseaseService.delete(id);
  }
}
