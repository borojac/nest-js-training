import { Observable } from "rxjs";

export interface ProductService {
    getProducts(data: {}): Observable<any>;
    getProductById(data: { id: number }): Observable<any>
}