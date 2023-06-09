import { Injectable } from '@nestjs/common';
import { CreateDiseaseInput } from './dto/create-disease.input';
import { UpdateDiseaseInput } from './dto/update-disease.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiseaseService {
  constructor(private prisma:PrismaService){}

  async create(createDiseaseInput: CreateDiseaseInput) {
    return await this.prisma.disease.create({data:{name:createDiseaseInput.name}})
  }

  async findAll() {
    return await this.prisma.disease.findMany();
  }

  async findOne(id: number) {    
    const disease = await this.checkDiseaseExist(id)

    return await this.prisma.disease.findUnique({
      where:{id:id}
    });
  }

  async update(id: number, updateDiseaseInput: UpdateDiseaseInput) {
    const disease = await this.checkDiseaseExist(id)
    return await this.prisma.disease.update({
      where :{id},
      data:{name:updateDiseaseInput.name}
  })
  }

  async remove(id: number) {
    
    const disease = await this.checkDiseaseExist(id)

    const deletedDisease = await this.prisma.disease.delete({
      where: { id: id}, 
    });
    return deletedDisease;
  }


  /** 
   * i create this private function because if the client make query on dieses=4 to (delete , update , get)
   * and dieses not exists in DB don't have error when make query to update it or delete it   
  */ 
   private async checkDiseaseExist(id:number) {
    
    const diseaseExists = await this.prisma.disease.findFirst({
      where: { id: id }, 
      select: { id: true }, // Select only the "id" field
    });
    
    if(diseaseExists== null){
      //catch it by  graphQlWrapper in resolver
      throw { 
        message: 'disease not found ',
        code:404,
       }; 
      }
      return diseaseExists
    
  }
}
