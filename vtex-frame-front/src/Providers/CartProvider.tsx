import React, { ReactNode, useContext, useReducer } from "react";
import { CartContext } from "../Contexts/CartContext";
import { CartReducer } from "../Reducer/CartReducer";
import { InitialDataCartContext } from "../Static/Data/InitialDataCartContext";


const CartProvider:React.FC<ReactNode> = ({children}): JSX.Element => {
    
    const [ cartState, cartDispatch ] = useReducer(CartReducer,InitialDataCartContext);

    return (
        <CartContext.Provider value={{cartState, cartDispatch}}>  
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => useContext(CartContext);

export { CartProvider };