export interface CartState {
  items: object[];
}

export interface CartItem {
  sku: string;
  name: string;
  image: string;
  priceSpecification: {
    price: number;
    oldPrice?: number;
    discount?: number;
  };
  isInCart?: boolean;
}
