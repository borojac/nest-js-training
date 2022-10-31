import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CartItem {
    @Field()
    name: string;

    @Field(type => Int)
    count: number;

    @Field()
    pricePerItem: string;

    @Field()
    wholeBill: string;
}