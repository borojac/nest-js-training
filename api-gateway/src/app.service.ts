import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CartService } from './interfaces/services/cart.service';
import { OrderService } from './interfaces/services/order.service';
import { ProductService } from './interfaces/services/product.service';

@Injectable()
export class AppService {
  private productService: ProductService;
  private cartService: CartService;
  private orderService: OrderService;

  constructor(
    @Inject('PRODUCT_PACKAGE') private productGrpcClient: ClientGrpc,
    @Inject('CART_PACKAGE') private cartGrpcClient: ClientGrpc,
    @Inject('ORDER_PACKAGE') private orderGrpcClient: ClientGrpc
  ) { }

  onModuleInit() {
    this.productService = this.productGrpcClient.getService<ProductService>('ProductService');
    this.cartService = this.cartGrpcClient.getService<CartService>('CartService');
    this.orderService = this.orderGrpcClient.getService<OrderService>('OrderService');
  }

  getProducts(): Observable<any> {
    return this.productService.getProducts({});
  }

  getCart(): Observable<any> {
    return this.cartService.viewCart({});
  }

  addToCart(id: number, count: number): Observable<any> {
    return this.cartService.addToCart({ id, count });
  }

  submitCart() {
    return this.cartService.makeOrder({});
  }

  getOrders() {
    return this.orderService.getOrders({});
  }
}
