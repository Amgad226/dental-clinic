import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class CheckPhone {
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  phoneExistsInUsers: boolean;

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  phoneExistsInPatients: boolean;

}
