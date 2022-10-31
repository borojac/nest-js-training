import { Query, Resolver } from "@nestjs/graphql";
import { Orders } from "src/models/orders.model";
import { OrdersService } from "./orders.service";

@Resolver()
export class OrdersResolver {
    constructor(private readonly ordersService: OrdersService) { }

    @Query(returns => Orders, { name: 'orders' })
    getOrders() {
        return this.ordersService.getOrders();
    }
}