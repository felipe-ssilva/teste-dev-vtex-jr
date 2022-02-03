import { CartState, CartItem } from "./types";
import { Constants } from "./constants";

const init: CartState = {
  items: [],
};

export const cartReducer = (
  state: CartState = init,
  action: { type: string; data: CartItem }
): CartState => {
  switch (action.type) {
    case Constants.ADD_TO_CART:
      return { items: [...state.items, action.data] };
    case Constants.REMOVE_FROM_CART:
      return {
        items: state.items.filter((item: any) => {
          if (item.sku != action.data.sku) return item;
        }),
      };
    default:
      return state;
  }
};
