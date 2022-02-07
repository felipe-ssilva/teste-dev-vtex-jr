import axios from "axios";
import { Product } from "../Static/Data/InitialDataProductContext";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ENV_URL_API,
});

interface defaultResponse { 
    success?: boolean,
    error?: boolean,
    errorData?: any,
    data?: any
}

interface getProductsGraphQlResponse {
    data: {
        [key: string]: Array<Product>
    }
}

const getAllProducts = async (): Promise<defaultResponse> => {
    try {
        const response = await axiosInstance.get<getProductsGraphQlResponse>("graphql", {
            params: {
                query: `
                    query {
                        getContent {
                            sku
                            name
                            image
                            priceSpecification {
                                price
                                discount
                                oldPrice
                            }
                        }
                    }
                `
            }
        });
        
        if(response.status === 200) return {success: true, data: response.data.data["getContent"]};

        return {success: true, data: []};
    } catch(error) {
        return { error: true, errorData: error  };
    }
}

const Requests = {
    getAllProducts
};


export { Requests };