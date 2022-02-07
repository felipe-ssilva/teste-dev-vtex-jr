import { InitialDataCartContextType, ItemCartType } from "../Static/Data/InitialDataCartContext";

export type CartActionTypeReducer = {
    type: "ADD-ITEM" | "OPEN-CART" | "RESET-CART" | "INCREMENT-ITEM" | "DECREMENT-ITEM" | "REMOVE-ITEM";
    fildName?: "items" | "totalPrice" | "totalItems";
    payload: any
}


const __addToCart = (item: ItemCartType, state: InitialDataCartContextType): InitialDataCartContextType => {
    if(item.qtd > 0) {
        return {
            ...state,
            items: [...state.items, item],
            totalItems: (state.totalItems + item.qtd),
            totalPrice: (state.totalPrice + item.product.priceSpecification.price * item.qtd),
        } as InitialDataCartContextType;
    }

    return state;
}


const __resetCart = (state: InitialDataCartContextType, menuState: boolean): InitialDataCartContextType => {
    return {
        cartOpen: (typeof menuState !== "undefined" && typeof menuState === "boolean" ? menuState : state.cartOpen),
        items: [],
        totalItems: 0,
        totalPrice: 0,
    } as InitialDataCartContextType;
}


const updateQtdItemList = (items: Array<ItemCartType>, id: string, type: "INCREMENT" | "DECREMENT"): Array<ItemCartType> => {
    const newArray = items.map((item: ItemCartType) => {
        if(item.id === id){
            return {
                ...item,
                qtd: (type === "INCREMENT" ? item.qtd + 1 : item.qtd - 1)
            } as ItemCartType;
        }

        return item;
    });

    return newArray;
}


const __incrementItem = (state: InitialDataCartContextType, item: ItemCartType): InitialDataCartContextType => {    
    return {
        ...state,
        totalPrice: (state.totalPrice + item.product.priceSpecification.price),
        items: updateQtdItemList(state.items, item.id, "INCREMENT")
    } as InitialDataCartContextType;
}

const __decrementItem = (state: InitialDataCartContextType, item: ItemCartType): InitialDataCartContextType => {
    return {
        ...state,
        totalPrice: (state.totalPrice - item.product.priceSpecification.price),
        items: updateQtdItemList(state.items, item.id, "DECREMENT")
    } as InitialDataCartContextType;    
}


const CartReducer = (state: InitialDataCartContextType, action: CartActionTypeReducer) => {

    const { payload, type } = action;

    switch (type) {
        case "ADD-ITEM":
            return __addToCart(payload, state);
        case "OPEN-CART": 
            return {
                ...state,
                cartOpen: !state.cartOpen
            } as InitialDataCartContextType
        case "RESET-CART": 
            return __resetCart(state, payload.menuState);
        case "INCREMENT-ITEM":
            return __incrementItem(state, payload)
        case "DECREMENT-ITEM":
            return __decrementItem(state, payload);
        case "REMOVE-ITEM": 
            return {
                ...state,
                items: state.items.filter((item: ItemCartType) => item.id !== payload.id),
                totalItems: state.totalItems - 1,
                totalPrice: (state.totalPrice - (payload.product.priceSpecification.price * payload.qtd))
            } as InitialDataCartContextType;
        default:
            return {...state};
    }
}

export { CartReducer };