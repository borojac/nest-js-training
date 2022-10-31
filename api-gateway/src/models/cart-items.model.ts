import { Field, ObjectType } from "@nestjs/graphql";
import { CartItem } from "./cart-item.model";

@ObjectType()
export class CartItems {
    @Field(type => [CartItem], { nullable: true })
    items: CartItem[];
}