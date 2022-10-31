import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SuccessResponse } from "src/models/success-response.model";
import { CartItems } from "src/models/cart-items.model";
import { CartsService } from "./carts.service";

@Resolver()
export class CartsResolver {
    constructor(
        private readonly cartsService: CartsService
    ) { }

    @Query(returns => CartItems, { name: 'carts' })
    getCart() {
        return this.cartsService.getCart();
    }

    // @Mutation(returns => String)
    // async addToCart(
    //     @Args('addToCartItem') addToCart: AddToCart
    // ) {
    //     this.cartsService.addToCart(addToCart.id, addToCart.count)
    //     return "Success";
    // }

    @Mutation(returns => SuccessResponse)
    async addToCart(
        @Args({ name: 'id', type: () => Int }) id: number,
        @Args({ name: 'count', type: () => Int }) count: number
    ) {
        return this.cartsService.addToCart(id, count);
    }

    @Mutation(returns => SuccessResponse)
    orderCart() {
        return this.cartsService.submitCart();
    }
}