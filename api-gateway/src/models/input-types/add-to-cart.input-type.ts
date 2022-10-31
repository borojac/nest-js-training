import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddToCart {
    @Field()
    id: number;

    @Field()
    count: number;
}