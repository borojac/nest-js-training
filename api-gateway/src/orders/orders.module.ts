import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'ORDER_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'order',
        protoPath: join(__dirname, '../order/order.proto'),
        url: 'localhost:5002'
      }
    }
  ])],
  providers: [OrdersService, OrdersResolver]
})
export class OrdersModule { }
