import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddToCartDto } from './dtos/add-to-cart.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('cart')
  getCart() {
    return this.appService.getCart();
  }

  @Post('cart')
  addToCart(@Body() addToCartDto: AddToCartDto) {
    return this.appService.addToCart(addToCartDto.id, addToCartDto.count);
  }

  @Post('cart/submit')
  orderCart() {
    return this.appService.submitCart();
  }

  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }

}
