import { Constants } from "./constants";

export const addToCart = (item: object) => {
  return { type: Constants.ADD_TO_CART, data: item };
};

export const removeFromCart = (item: object) => {
  return { type: Constants.REMOVE_FROM_CART, data: item };
};
