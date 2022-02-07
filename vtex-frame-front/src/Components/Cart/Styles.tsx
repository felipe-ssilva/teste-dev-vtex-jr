import styled from "styled-components";
import { colors } from "../../Static/Colors";

const getWindowHeight = () => {
    return window.innerHeight;
}

const ContainerCartFixed = styled.div`
    width: 400px;
    height: ${getWindowHeight() - 70}px;
    background: #ffffff;
    box-shadow: 0px 30px 25px 0px #00000030;
    position: fixed;
    right: ${({active}: {active: boolean}) => !active ? "-100%" : "0"};
    top: 70px;
    z-index: 1000;
    transition: all 1s ease-in-out;

    @media(max-width: 580px) {
        width: 100%;
    }
`;

const NotFoundItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .__not-found-items {
        font-size: 1.3rem;
        font-family: 'Nunito', sans-serif;
        color: #dddddd;
    }
`;


const RelativeViewCart = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;

    .__tittle_cart {
        font-size: 1.5rem;
        color: ${colors.primary}
    }
`;

const ButtonsFinalizarCompra = styled.button`
    width: 90%;
    height: 60px;
    border-radius: 10px;
    background: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border: none;
    position: absolute;
    bottom: 20px;
    font-family: 'Poppins', sans-serif;
    left: 50%;
    font-weight: bold;
    transform: translate(-50%, 0);
`;


const ProductContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 90px;
    margin-top: 20px;
    box-shadow: 0px 0px 5px 0px #0000002f;
    padding: 10px;
    display: flex;
    overflow: hidden;
    border-radius: 5px; 
`;

const ContainerImage = styled.div`
    flex: 0.4;
    height: 100%;
    overflow: hidden;

    .__image-product {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContainerProductDetails = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
`;

const ContainerDescriptionProduct = styled.div`
    flex: 1;
    height: 100%;
    padding: 0px 10px 0px 10px;
    
    .__name-product {
        font-size: 0.8rem;
        line-height: 0;
        color: #9c9c9c;
        font-family: 'Nunito', sans-serif;
    }
`;

const ContainerActions = styled.div`
    flex: 0.5;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ActionButton = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 5px 0px #0000001d;
`;

const ContainerFlex = styled.button`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    height: 100%;
    display: flex;
    justify-content: center;
    algin-items: center;
`;

const ContainerProductList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 215px);
    margin: 10px 0px;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        width: 0px;
    }
`;


export { 
    ContainerCartFixed, 
    NotFoundItem, 
    RelativeViewCart, 
    ButtonsFinalizarCompra, 
    ProductContainer, 
    ContainerProductDetails, 
    ContainerImage, 
    ContainerDescriptionProduct, 
    ContainerActions,
    ActionButton,
    ContainerFlex,
    ContainerProductList
};