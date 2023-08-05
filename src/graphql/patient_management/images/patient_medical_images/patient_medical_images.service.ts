import { Injectable } from '@nestjs/common';
import { CreatePatientMedicalImageInput } from './dto/create-patient_medical_image.input';
import { UpdatePatientMedicalImageInput } from './dto/update-patient_medical_image.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImagesUploaderService } from 'src/images_uploader/images_uploader.service';

@Injectable()
export class PatientMedicalImagesService {
  constructor(private prisma: PrismaService, private imageUploaderService: ImagesUploaderService) { }
  async create({ medical_image_type_id, patient_id, title, image }: CreatePatientMedicalImageInput) {
    const { src } = await this.imageUploaderService.store({
      image,
      title,
      patient_id
    })

    return await this.prisma.patientMedicalImage.create({
      data: {
        src,
        title,
        created_at: new Date(Date.now()),
        medical_image_type_id,
        patient_id
      },
      include: {
        imageType: true
      }
    });
  }

  async findAll(patient_id?: number, medical_image_type_id?: number) {
    return await this.prisma.patientMedicalImage.findMany({
      where: {
        patient_id,
        medical_image_type_id
      },
      include: {
        imageType: true,
      }
    });
  }

  async update(id: number, updatePatientMedicalImageInput: UpdatePatientMedicalImageInput) {
    return await this.prisma.patientMedicalImage.update({
      where: { id },
      data: {
        ...updatePatientMedicalImageInput
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.patientMedicalImage.delete({
      where: { id }
    });
  }
}
