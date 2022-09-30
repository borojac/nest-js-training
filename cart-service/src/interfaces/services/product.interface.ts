import { Observable } from "rxjs";
import { EmptyParam } from "../empty-param.interface";
import { GetByIdRequest } from "../get-by-id-request.interface";

export interface ProductService {
    getProducts(data: EmptyParam): Observable<any>;
    getProductById(data: GetByIdRequest): Observable<any>;
}