import styled from "styled-components";
import { colors } from "../../Static/Colors";

const ContainaerProduct = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    

    @media(max-width: 1150px) {
        max-width: 340px;
        margin: 0 auto;
    }
`;

const ContainerProductItem = styled.div`
    width: 100%;
    height: 95%;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    background:#ffffff;
    overflow: hidden;
    position: relative;
`;

const ContainerImage = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 0px 0px 30px 30px;
    overflow: hidden;

    .__image-product {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContainerDescription = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;

    .__title-price-product{
        font-size: 1.7rem;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        color: ${colors.primary}

    }
    
    .__title-product {
        font-size: 1rem;
        font-family: 'Nunito', sans-serif;
    }

    @media(max-width: 750px) {
        .__title-price-product {
            font-size: 1.3rem
        }

        .__title-product {
            font-size: 0.85rem
        }
    }
`;


const ButtonAddCart = styled.button`
    width: 70%;
    height: 55px;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: ${colors.primary};
    border:none;
    margin: 0 auto;
    transition: all .5s ease;

    &:hover {
        width: 90%;
        height: 65px;
    }
`;

const ContainerDicount = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background: ${colors.primary};
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .__discount-number {
        font-size: 1rem,
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: #ffffff;
    }
`;

export { ContainaerProduct, ContainerProductItem, ContainerImage, ContainerDescription,ButtonAddCart, ContainerDicount }
