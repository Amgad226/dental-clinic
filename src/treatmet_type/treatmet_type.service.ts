import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TreatmentTypeDto } from './dto';
@Injectable()
export class TreatmetTypeService {
    constructor(private prisma :PrismaService){}

    
    //Get All TreatmentType
     findAll(){
        return  this.prisma.treatmentType.findMany();
    }


    //create TreatmentType 
    async create(data:TreatmentTypeDto){
        return await this.prisma.treatmentType.create({
            data
        })
    }

    //Update TreatmentType
    async update(id :number ,data : TreatmentTypeDto){
         await this.prisma.treatmentType.update({
            data,
            where : {
                id
            }
        })
        return{data , message: 'TreatmentType updated successfully'};
        
    }

    //Show TreatmentType
     show (id : number) {
        return  this.prisma.treatmentType.findFirstOrThrow({
            where : {
                id
            }
        })
    }

    //Delete TreatmentType
    async delete (id :number){
          await this.prisma.treatmentType.delete({
            where : {
                id
            }
        }) ;
        return {message :'TreatmentType deleted successfully'};
        
    }  
}
