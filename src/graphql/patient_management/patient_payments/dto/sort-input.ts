import { Field, InputType, registerEnumType } from "@nestjs/graphql";

// enum SortField {
//     Amount = 'amount',
//     Date = 'date',
// }

// registerEnumType(SortField, {
//     name: 'SortField',
// });

@InputType()
export class SortInput {
    @Field()
    field: 'amount' | 'date';

    @Field()
    order: 'asc' | 'desc';
}