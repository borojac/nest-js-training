import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CartsResolver } from './carts.resolver';
import { CartsService } from './carts.service';

@Module({
  imports: [ClientsModule.register([{
    name: 'CART_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'cart',
      protoPath: join(__dirname, '../cart/cart.proto'),
      url: 'localhost:5001'
    }
  }])],
  providers: [CartsService, CartsResolver]
})
export class CartsModule { }
