import { Observable } from "rxjs";
import { EmptyRequest } from "../empty-request.interface";
import { GetProductByIdRequest } from "../get-product-by-id-request.interface";

export interface ProductService {
    getProducts(data: EmptyRequest): Observable<any>;
    getProductById(data: GetProductByIdRequest): Observable<any>
}