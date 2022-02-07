import { InitialDataProductContextType } from "../Static/Data/InitialDataProductContext"

export type ProductActionTypeReducer = {
    type: "REPLACE-PRODUCTS";
    fildName?: "products";
    payload: any
}

const ProductsReducer = (state: InitialDataProductContextType, action: ProductActionTypeReducer) => {

    const { payload, type, fildName } = action;

    switch (type) {
        case "REPLACE-PRODUCTS":
            return {
                [fildName!]: payload
            } as InitialDataProductContextType;
        default:
            return {...state};
    }
}

export { ProductsReducer };