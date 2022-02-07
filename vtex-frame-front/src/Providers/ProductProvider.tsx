import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../Contexts/ProductContext";
import { ProductsReducer } from "../Reducer/ProductReducer";
import { Requests } from "../Service/Api";
import { InitialDataProductContext } from "../Static/Data/InitialDataProductContext";


const ProductProvider:React.FC<ReactNode> = ({children}): JSX.Element => {
    
    const [ productState, productDispatch ] = useReducer(ProductsReducer,InitialDataProductContext);

    useEffect(() => {
        (async () => {
            const response = await Requests.getAllProducts();
            if(response.success) {
                productDispatch({
                    payload: response.data,
                    type: "REPLACE-PRODUCTS",
                    fildName: "products"
                });
            } else {
                alert("Verifique se a API está rodando.");
                toast("Algo de errado aconteceu ao tentar carregar os produtos.");
            }        
        })();
    }, []);

    return (
        <ProductContext.Provider value={{productState, productDispatch}}>  
            {children}
        </ProductContext.Provider>
    )
}


export const useProductContext = () => useContext(ProductContext);

export { ProductProvider };