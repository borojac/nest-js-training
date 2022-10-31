import { Field, ObjectType } from "@nestjs/graphql";
import { OrderItem } from "./order-item.model";

@ObjectType()
export class Order {
    @Field(type => [OrderItem], { nullable: true })
    items: OrderItem[]
}