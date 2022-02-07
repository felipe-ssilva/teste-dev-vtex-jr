import React, { createContext } from 'react';
import { ProductActionTypeReducer } from '../Reducer/ProductReducer';
import { InitialDataProductContext, InitialDataProductContextType } from '../Static/Data/InitialDataProductContext';

export interface ProductContextType {
    productState: InitialDataProductContextType
    productDispatch: React.Dispatch<ProductActionTypeReducer>;
}

const ProductContext = createContext<ProductContextType>({
    productState: InitialDataProductContext,
    productDispatch: (): void => {}
});

export { ProductContext };