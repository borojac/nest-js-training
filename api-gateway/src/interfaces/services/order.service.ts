import { Observable } from "rxjs";
import { EmptyRequest } from "../empty-request.interface";

export interface OrderService {
    getOrders(data: EmptyRequest): Observable<any>;
}