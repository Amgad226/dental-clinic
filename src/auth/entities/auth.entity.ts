import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => Boolean, { description: 'this field for check if this phone number exists in users ' })
  phoneExists: boolean;
}
