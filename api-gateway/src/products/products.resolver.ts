import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Product } from "src/models/product.model";
import { Products } from "src/models/products.model";
import { ProductsService } from "./products.service";

@Resolver(of => Product)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) { }

    @Query(returns => Product, { name: 'product' })
    async getProduct(@Args('id', { type: () => Int }) id: number) {
        return this.productsService.getById(id);
    }

    @Query(returns => Products, { name: 'products' })
    async getProducts() {
        return this.productsService.getAll();
    }
}