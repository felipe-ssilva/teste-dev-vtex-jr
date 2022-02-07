import styled from "styled-components";
import { colors } from "../../Static/Colors";


const Header = styled.header`
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 59px 0px #d1d1d1;
    background: #fafafa;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    justify-content: center;
    display: flex;
    align-items: center;
`;

const BoxContent = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-start;

    .__title-loja{ 
        font-size: 2rem;
        color: ${colors.primary};
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-style: italic;

        @media(max-width: 520px) {
            font-size: 1.3rem;
        }

    }
`;


const BoxContentItems = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const BoxUserImage = styled.div`
    width: 45px;
    height: 45px;
    max-width: 45px;
    max-height: 45px;
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    cursor: pointer;

    .__image-user-profile {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const BoxCartIcon = styled.div`
    width: 40px;
    display: flex;
    cursor: pointer;
    justify-content:center;
    align-items: center;
    margin-right: 20px;
    position: relative;
`;


const BoxRenderItems = styled.div`
    width: 20px;
    height: 20px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top:0;
    left: 0;

    .__qtd_items {
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
        color: #ffffff;
        font-weight: bold;
    }
`;

export { Header, BoxContent, BoxContentItems, BoxUserImage,BoxCartIcon, BoxRenderItems }