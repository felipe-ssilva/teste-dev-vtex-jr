import { ReactNode, useEffect } from "react";
import { useCartContext } from "../../Providers/CartProvider";
import { ContainerCartFixed, NotFoundItem, RelativeViewCart, ButtonsFinalizarCompra, ProductContainer, ContainerImage, ContainerProductDetails, ContainerDescriptionProduct, ContainerActions, ActionButton, ContainerFlex, ContainerProductList } from "./Styles";
import Lottie, { Options } from 'react-lottie';
import AnimationNotFound from '../../Assets/68796-empty-search.json';
import { ItemCartType } from "../../Static/Data/InitialDataCartContext";
import { AddOutline, RemoveOutline } from 'react-ionicons';
import { toast } from "react-toastify";


const renderNameSubString = (name: string) :string => {
    if(name.length > 50) return `${name.substring(0, 50)}...`;
    return name;
}

const CartComponent:React.FC<ReactNode> = (props):JSX.Element => {

    const { cartState: { cartOpen, totalItems,totalPrice, items }, cartDispatch } = useCartContext();

    useEffect(() => {}, [cartOpen, items, totalPrice]);

    const optionsAnimations: Options = {
        animationData: AnimationNotFound,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        } 
    }

    const handleFinalizePurchase = (): void => {
        
        toast("Compra finalizada com sucesso!", {type: "success"});

        cartDispatch({
            type: "RESET-CART",
            payload: {menuState: false}
        });
    }

    const handleIncrementProduct = (item: ItemCartType): void => cartDispatch({
        payload: item,
        type: "INCREMENT-ITEM",
    });

    const handleDecrementProduct = (item: ItemCartType): void => {
        if(item.qtd - 1 > 0) {
            cartDispatch({
                payload: item,
                type: "DECREMENT-ITEM"
            });
        } else {
            cartDispatch({
                payload: item,
                type: "REMOVE-ITEM",
            });
        }
    }
    
    return (
        <ContainerCartFixed active={cartOpen}>
            {totalItems > 0 ? (
                <RelativeViewCart> 
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <span className="__tittle_cart">Seu carrinho</span>
                        <span className="__tittle_cart">Total: R${totalPrice.toFixed(2)}</span>

                    </div>
                    <ContainerProductList>
                        {items.map((item: ItemCartType) => {
                            return (
                                <ProductContainer key={item.id}>
                                    <ContainerImage>
                                        <img className="__image-product" src={item.product.image} alt="product item"/>
                                    </ContainerImage>
                                    <ContainerProductDetails>
                                        <ContainerDescriptionProduct>
                                            <span className="__name-product">{renderNameSubString(item.product.name)}</span>
                                        </ContainerDescriptionProduct>
                                        <ContainerActions>
                                            <ActionButton>
                                                <ContainerFlex onClick={() => handleDecrementProduct(item)} style={{cursor: "pointer"}}>
                                                    <RemoveOutline 
                                                        color="#000000"
                                                        height="20px"
                                                    />
                                                </ContainerFlex>
                                                <ContainerFlex>
                                                    <span className="__qtd-item">{item.qtd}</span>
                                                </ContainerFlex>
                                                <ContainerFlex onClick={() => handleIncrementProduct(item)} style={{cursor: "pointer"}}>
                                                   <AddOutline
                                                        color="#000000"
                                                        height="20px"
                                                    />
                                                </ContainerFlex>
                                            </ActionButton>
                                        </ContainerActions>
                                    </ContainerProductDetails>
                                </ProductContainer>
                            )
                        })}
                    </ContainerProductList>


                    <ButtonsFinalizarCompra onClick={handleFinalizePurchase}>
                        Finalizar compra
                    </ButtonsFinalizarCompra>
                </RelativeViewCart>
            ) : (
                <NotFoundItem>
                    <Lottie 
                        options={optionsAnimations} 
                        width="200px"
                        height="200px"
                    />
                    <span className="__not-found-items">Nenhum item adicionado</span>
                </NotFoundItem>
            )}
        </ContainerCartFixed>
    );
}


export { CartComponent }