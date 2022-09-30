import { Observable } from "rxjs";
import { AddToCartRequest } from "../add-to-cart-request.interface";
import { EmptyRequest } from "../empty-request.interface";

export interface CartService {
    viewCart(data: EmptyRequest): Observable<any>;
    addToCart(data: AddToCartRequest): Observable<any>;
    makeOrder(data: EmptyRequest): Observable<any>;
}