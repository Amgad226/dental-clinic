import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TreatmetTypeService } from './treatmet_type.service';
import { TreatmentTypeDto } from './dto';

@Controller('treatment_type')
export class TreatmetTypeController {
    constructor(private treatmet_typeService :TreatmetTypeService ){}

    //Get TreatmentType
    @Get('all')
     treatment_type() {
        return   this.treatmet_typeService.findAll();

    }

    //Create TreatMentType
    @UsePipes(ValidationPipe)
    @Post('create')
    async create(@Body() body : TreatmentTypeDto){
        return await this.treatmet_typeService.create(body);
    }

    //Update TreatmentType
    @UsePipes(ValidationPipe)
    @Patch('update/:id')
    async update(@Param('id',ParseIntPipe) id , @Body() body :TreatmentTypeDto){
        return await this.treatmet_typeService.update(id,body);
    }

    //Show TreatmentType 
    @UsePipes(ValidationPipe)
    @Get("show/:id")
     show(@Param ('id',ParseIntPipe) id ){
        return  this.treatmet_typeService.show(id);
    }


    //Delete TreatmentType
    @UsePipes(ValidationPipe)
    @Delete('delete/:id')
    async delete (@Param('id',ParseIntPipe) id){
        return await this.treatmet_typeService.delete(id);
    }
}
