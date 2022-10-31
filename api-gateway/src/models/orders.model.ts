import { Field, ObjectType } from "@nestjs/graphql";
import { Order } from "./order.model";

@ObjectType()
export class Orders {
    @Field(type => [Order])
    orders: Order[];
}