import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OrderItem {
    @Field()
    name: string;

    @Field(type => Int)
    count: number

    @Field()
    pricePerItem: string

    @Field()
    wholeBill: string;
}