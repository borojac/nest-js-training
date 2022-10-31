import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderService } from 'src/interfaces/services/order.service';

@Injectable()
export class OrdersService {
    private orderService: OrderService

    constructor(
        @Inject('ORDER_PACKAGE') private orderGrpcClient: ClientGrpc
    ) { }

    onModuleInit() {
        this.orderService = this.orderGrpcClient.getService<OrderService>('OrderService');
    }

    getOrders() {
        return this.orderService.getOrders({});
    }
}
