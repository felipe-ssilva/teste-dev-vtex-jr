import styled from "styled-components";
import { colors } from "../../Static/Colors";


const ContainerModal = styled.div`
    width: 140px;
    background: #fafafa;
    position: fixed;
    box-shadow: 0px 0px 8px 1px #00000014;
    border-radius: 10px;
    top: 60px;
    z-index: 1099;
    padding: 10px;
    right: ${({width}: {width: number}) => width > 1200 ? `${(((width - 1200) - 30) / 2) - 12}px` : "30px"};

    .__item-data {
        font-size: 0.8rem;
        cursor: pointer;
        width: 100%;
        display: inline-block;
        padding: 3px;
        border-radius: 4px;
        transitions: all .5s ease;
        font-family: 'Poppins', sans-serif;
    }

    .__item-data:hover {
        color: ${colors.primary}};
    }
`;

export { ContainerModal }