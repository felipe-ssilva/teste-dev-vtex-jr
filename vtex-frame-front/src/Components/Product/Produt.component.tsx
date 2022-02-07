import { toast } from "react-toastify";
import { useCartContext } from "../../Providers/CartProvider";
import { ItemCartType } from "../../Static/Data/InitialDataCartContext";
import { Product } from "../../Static/Data/InitialDataProductContext";
import { ContainaerProduct, ContainerProductItem, ContainerImage, ContainerDescription, ButtonAddCart,ContainerDicount } from './Styles';
import { v4 as uuid } from 'uuid';

interface ProductComponentProps {
    product: Product,
}

const renderPrice = (price: number, oldPrice: number | null | undefined): JSX.Element  => {
    let baseString = `R$${price.toFixed(2)}`;
    if(oldPrice) return <span>De <span style={{textDecoration: "line-through"}}> {oldPrice.toFixed(2)}</span> por {baseString}</span>; 
    return <span>{baseString}</span>;
}

const ProductComponent:React.FC<ProductComponentProps> = ({ product }):JSX.Element => {

    const { cartDispatch } = useCartContext();


    const handleAddCart = (): void => {
        cartDispatch({
            type: "ADD-ITEM",
            payload: {
                product,
                qtd: 1,
                id: uuid()
            } as ItemCartType,
        });

        toast("Produto adicionado ao carrinho com sucesso!", {type: "success"});
    }

    return (
        <ContainaerProduct>
            <ContainerProductItem>
                {product.priceSpecification.discount && (
                    <ContainerDicount>
                        <span className="__discount-number">{product.priceSpecification.discount}%</span>
                    </ContainerDicount>
                )}

                <ContainerImage>
                    <img src={product.image} alt="product" className="__image-product"/>
                </ContainerImage>

                <ContainerDescription>
                    <span className="__title-price-product"> {renderPrice(product.priceSpecification.price, product.priceSpecification.oldPrice)} </span>
                    <span className="__title-product">{product.name}</span>

                    <ButtonAddCart type="button" onClick={handleAddCart}>
                        Adicionar ao Carrinho
                    </ButtonAddCart>
                </ContainerDescription>
            </ContainerProductItem>
        </ContainaerProduct>
    );
};

export { ProductComponent };