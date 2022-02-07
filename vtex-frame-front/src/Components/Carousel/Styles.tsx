import styled from "styled-components";

const CarouselContainer = styled.div`
    widht: 100%;
    height: 100%;
    position: relative;

    .carousel-root {
        height: 75vh; 
        max-height: 600px;
    }

    .carousel.carousel-slider {
        height: 75vh; 
        max-height: 600px;
    }
`;


const ContainerImageBanner = styled.div`
    widht: 100%;
    height: 100%;
    position: relative;
    background-image: url(${({img}: {img: string}) => img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

export { CarouselContainer, ContainerImageBanner}