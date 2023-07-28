import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { Gender } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';


registerEnumType(Gender, {
  name: 'Gender'
});


@InputType()
export class CreatePatientInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  // @Transform(value => {
  //   if (typeof value === 'string') {
  //     return value as Gender;
  //   }
  //   return value;
  // })
  gender: Gender

  @Field(() => String, { nullable: true })
  phone?: string

  @Field(() => Date, { nullable: true })
  birth_date?: Date

  @Field(() => String, { nullable: true })
  job?: string

  @Field(() => String, { nullable: true })
  address?: string

  @Field(() => String, { nullable: true })
  main_complaint?: string


  @Field(() => String, { nullable: true })
  maintal_status?: string

}
