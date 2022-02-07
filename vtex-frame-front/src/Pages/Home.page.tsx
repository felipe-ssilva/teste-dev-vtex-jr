import { HomeComponent } from "../Components/Home/Home.component";
import { CartProvider } from "../Providers/CartProvider";
import { ProductProvider } from "../Providers/ProductProvider";

const HomePage:React.FC = (props):JSX.Element => {
    return (
        <ProductProvider>
            <CartProvider>
                <HomeComponent {...props} />
            </CartProvider>
        </ProductProvider>
    )
    
}

export { HomePage }