export interface CartItem {
    name: string;
    count: number;
    pricePerItem: string;
    wholeBill: string;
}

export interface CartItems {
    items: CartItem[];
}
