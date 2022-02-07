import { buildSchema } from "graphql";

const schema = buildSchema(`
    type PriceSpecification {
        price: Float,
        oldPrice: Float,
        discount: Float,
    }

    type Product {
        sku: String,
        name: String,
        image: String,
        priceSpecification: PriceSpecification!
    }

    type Query {
        getContent: [Product!],
    }
`);


export { schema }
