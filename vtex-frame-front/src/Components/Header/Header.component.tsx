import { ReactNode } from "react";
import { Container } from "../../Assets/Styles/MainStyles";
import { Header, BoxContent, BoxContentItems, BoxUserImage, BoxCartIcon, BoxRenderItems } from "./Styles";
import { CartOutline } from 'react-ionicons';
import { useUserCoontext } from "../../Providers/UserProvider";
import { useCartContext } from "../../Providers/CartProvider";


const renderImageUser = (photoURL: string | undefined | null) => {
    if(!photoURL) return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";
    return photoURL;
}

const HeaderComponent:React.FC<ReactNode> = (props):JSX.Element => {
    
    const { userState: { user }, userDispatch } = useUserCoontext();
    const { cartState: { totalItems }, cartDispatch } = useCartContext();

    const handleOpenCart = ():void => cartDispatch({
        payload: null,
        type: "OPEN-CART"
    });

    const handleOpenMenu = (): void => userDispatch({
        payload: null,
        type: "OPEN-MENU"
    });
 

    return (
        <Header>
            <Container>
                <div className="w-100 d-flex justify-content-start align-items-center h-100">
                    <BoxContent>
                        <span className="__title-loja">Store Frame</span>
                    </BoxContent>

                    <BoxContentItems>
                        <BoxCartIcon onClick={handleOpenCart}>
                            {totalItems > 0 && (
                                <BoxRenderItems>
                                    <span className="__qtd_items">{totalItems}</span>
                                </BoxRenderItems>
                            )}
                            <CartOutline 
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                        </BoxCartIcon>
                        <BoxUserImage onClick={handleOpenMenu}>
                            <img alt="user profile" className="__image-user-profile" src={renderImageUser(user?.photoURL)}/>
                        </BoxUserImage>

                    </BoxContentItems>
                </div>
            </Container>
        </Header>
    );
}


export { HeaderComponent }