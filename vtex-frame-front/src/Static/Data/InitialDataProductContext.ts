

interface InitialDataProductContextType {
    [key: string]: any, 
    products: Array<Product>
}

interface priceSpecification {
    priceSpecification: {
        price: number,
        oldPrice?: number,
        discount?: number
    }
}

export interface Product extends priceSpecification {
    sku: string,
    name: string,
    image: string,
}

const InitialDataProductContext: InitialDataProductContextType = {
    products: []
}

export type { InitialDataProductContextType }
export { InitialDataProductContext }