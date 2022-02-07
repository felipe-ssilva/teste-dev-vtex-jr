import { Product } from "./InitialDataProductContext"


export interface ItemCartType {
    qtd: number,
    product: Product,
    id: string
} 

interface InitialDataCartContextType {
    [key: string]: any, 
    items: Array<ItemCartType>
    totalPrice: number,
    totalItems: number,
    cartOpen: boolean
}


const InitialDataCartContext: InitialDataCartContextType = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    cartOpen: false
}

export type { InitialDataCartContextType }
export { InitialDataCartContext }