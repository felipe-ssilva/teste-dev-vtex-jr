import { ReactNode } from "react";
import { MainContainer } from "../../Assets/Styles/MainStyles";
import { CarouselComponent } from "../Carousel/Carousel.component";
import { CartComponent } from "../Cart/Cart.component";
import { HeaderComponent } from "../Header/Header.component";
import { ModalOptionsUser } from "../modal-options-user/ModalOptionsUser.component";
import { VitrineComponent } from "../Vitrine/Vitrine.component";
import { ContainerSliderAndHeader } from "./Styles";

const HomeComponent:React.FC<ReactNode> = (props):JSX.Element => {
    return (
        <MainContainer>
            <CartComponent />
            <ModalOptionsUser />

            <ContainerSliderAndHeader>
                <CarouselComponent />
                <HeaderComponent />
            </ContainerSliderAndHeader>
            <VitrineComponent />
        </MainContainer>
    );
}


export { HomeComponent }