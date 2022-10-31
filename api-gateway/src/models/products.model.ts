import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "./product.model";

@ObjectType()
export class Products {
    @Field(type => [Product])
    products: number;
}