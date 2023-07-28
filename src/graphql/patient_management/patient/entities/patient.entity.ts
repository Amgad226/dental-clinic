import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gender } from '@prisma/client';

@ObjectType()
export class Patient {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string

  @Field(() => Gender)
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
