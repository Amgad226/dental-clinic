import {  Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AppService{
    constructor(private prisma :PrismaService){}
    helloWorld(){
        return 'Hello, World-this change form docker container ';
    }
    async storeDiseaseForTest(){
        try{

            const newDisease = await this.prisma.disease.create({
                data: {
                    name:'disease_name ',
                },
            });;
            return newDisease;
        }
        catch(e)
        {
            console.log('error', e);
            
            return e
        }
    }
}