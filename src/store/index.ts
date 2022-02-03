import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { CartState } from "./cart/types";
import { minicartReducer } from "./minicart/reducer";
import { MinicartState } from "./minicart/types";

export interface RootState {
  cart: CartState;
  minicart: MinicartState;
}

const store = createStore<RootState, any, any, any>(
  combineReducers({
    cart: cartReducer,
    minicart: minicartReducer,
  })
);

export default store;
