import styled from "styled-components";


const ContainerVitrineRelative = styled.div`
    width: 100%;
    position: relative;
    padding-top: 50px;
    margin-bottom: 100px
`;

const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;

    @media(max-width: 1150px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 580px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;


export { ContainerVitrineRelative, GridContainer }