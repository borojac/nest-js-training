import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CartService } from 'src/interfaces/services/cart.service';

@Injectable()
export class CartsService {
    private cartService: CartService;

    constructor(
        @Inject("CART_PACKAGE") private cartGrpcClient: ClientGrpc
    ) { }

    onModuleInit() {
        this.cartService = this.cartGrpcClient.getService<CartService>('CartService');
    }

    getCart(): Observable<any> {
        return this.cartService.viewCart({});
    }

    addToCart(id: number, count: number): Observable<any> {
        return this.cartService.addToCart({ id, count })
    }

    submitCart() {
        return this.cartService.makeOrder({});
    }

}
