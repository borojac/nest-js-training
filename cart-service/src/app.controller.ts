import { Controller, Get, NotFoundException } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { SuccessResponse } from './interfaces/success-response.interface';
import { CartItems } from './interfaces/cart-item.interface';
import { EmptyParam } from './interfaces/empty-param.interface';
import { ItemInfo } from './interfaces/item-info.interface';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  private readonly CART_ITEMS: CartItems = {
    items: []
  };

  @GrpcMethod('CartService', 'ViewCart')
  viewCart(data: EmptyParam): CartItems {
    return this.CART_ITEMS;
  }

  @GrpcMethod('CartService', 'AddToCart')
  addToCart(data: ItemInfo): SuccessResponse {
    const itemInfo = this.appService.getProductInfo(data.id);
    if (!itemInfo) {
      return {
        success: false,
        message: 'product not found'
      }
    }

    itemInfo.subscribe({
      next: (val) => {
        this.CART_ITEMS.items.push({
          count: data.count,
          name: val.name,
          pricePerItem: val.price,
          wholeBill: (data.count * parseFloat(val.price)).toString()
        });
      }
    });

    return {
      success: true,
      message: 'product successfuly added'
    }
  }

  @GrpcMethod('CartService', 'MakeOrder')
  makeOrder(data: EmptyParam): SuccessResponse {
    try {
      this.appService.sendMessageToQueue(this.CART_ITEMS)
    } catch (err) {
      return {
        success: false,
        message: 'Making order process failed'
      }
    }

    this.CART_ITEMS.items = [];

    return {
      success: true,
      message: 'Making order process finished'
    }
  }
}
