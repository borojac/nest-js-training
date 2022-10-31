import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [ClientsModule.register([{
    name: 'PRODUCT_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: join(__dirname, '../product/product.proto')
    }
  }])],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule { }
