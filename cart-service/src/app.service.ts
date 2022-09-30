import { Inject, Injectable } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { ProductService } from "./interfaces/services/product.interface";
import { CartItems } from "./interfaces/cart-item.interface";
import { Observable } from "rxjs";
const amqp = require('amqplib');

@Injectable()
export class AppService {
    private productService: ProductService;

    constructor(@Inject('PRODUCT_PACKAGE') private productGrpcClient: ClientGrpc) { }

    onModuleInit() {
        this.productService = this.productGrpcClient.getService<ProductService>('ProductService');
    }

    getProductInfo(id: number): Observable<any> {
        return this.productService.getProductById({ id });
    }

    async sendMessageToQueue(cartItems: CartItems) {
        let queue = 'orders';
        let msg = JSON.stringify(cartItems);
        const connection = await amqp.connect('amqp://127.0.0.1');
        const channel = await connection.createConfirmChannel();

        channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(msg));

        await channel.waitForConfirms();
        connection.close();
    }
}