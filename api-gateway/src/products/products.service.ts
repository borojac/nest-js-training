import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ProductService } from 'src/interfaces/services/product.service';

@Injectable()
export class ProductsService {
    private productService: ProductService;

    constructor(
        @Inject('PRODUCT_PACKAGE') private productGrpcClient: ClientGrpc,
    ) { }

    onModuleInit() {
        this.productService = this.productGrpcClient.getService<ProductService>('ProductService');
    }

    getById(id: number): Observable<any> {
        return this.productService.getProductById({ id });
    }

    getAll(): Observable<any> {
        return this.productService.getProducts({});
    }
}
