import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([{
    name: 'PRODUCT_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: join(__dirname, 'product/product.proto')
    }
  },
  {
    name: 'CART_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'cart',
      protoPath: join(__dirname, 'cart/cart.proto'),
      url: 'localhost:5001'
    }
  },
  {
    name: 'ORDER_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'order',
      protoPath: join(__dirname, 'order/order.proto'),
      url: 'localhost:5002'
    }
  }
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
