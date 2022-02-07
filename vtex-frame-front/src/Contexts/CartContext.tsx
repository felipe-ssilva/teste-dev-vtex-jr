import React, { createContext } from 'react';
import { CartActionTypeReducer } from '../Reducer/CartReducer';
import { InitialDataCartContext, InitialDataCartContextType } from '../Static/Data/InitialDataCartContext';

export interface ProductContextType {
    cartState: InitialDataCartContextType
    cartDispatch: React.Dispatch<CartActionTypeReducer>;
}

const CartContext = createContext<ProductContextType>({
    cartState: InitialDataCartContext,
    cartDispatch: (): void => {}
});

export { CartContext };