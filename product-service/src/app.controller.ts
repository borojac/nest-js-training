import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmptyRequest } from './interfaces/empty-request.interface';
import { ProductInfo } from './interfaces/product-info.interface';
import { Product, ProductsResponse } from './interfaces/product.interface';

@Controller()
export class AppController {

  private readonly products: Product[] = [
    { id: 1, name: "Monitor", price: "399.99" },
    { id: 2, name: "Mouse", price: "23.49" },
    { id: 3, name: "Keyboard", price: "29.00" },
    { id: 4, name: "External HDD 1TB", price: "89.99" },
    { id: 5, name: "Speakers", price: "14.30" },
  ]

  @GrpcMethod('ProductService', 'GetProducts')
  getProducts(data: EmptyRequest): ProductsResponse {
    return { products: this.products };
  }

  @GrpcMethod('ProductService', 'GetProductById')
  getProductById(data: ProductInfo): Product {
    return this.products.find(val => val.id === data.id);
  }
}
