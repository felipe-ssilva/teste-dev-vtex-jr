import React, { ReactNode } from "react"
import Banner1 from '../../Assets/Banner1.png';
import Bannermb from '../../Assets/Bannermb.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer, ContainerImageBanner } from "./Styles";



const CarouselComponent:React.FC<ReactNode> = (props):JSX.Element => {

    const widht = window.innerWidth;

    return (
        <React.Fragment>
            {widht > 760 ? (
                <CarouselContainer>
                    <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                        <div>
                            <img src={Banner1} alt="Banner 1" />
                        </div>
                        <div>
                            <img src="https://media.istockphoto.com/vectors/ecommerce-banner-and-icons-vector-id629382780?k=20&m=629382780&s=170667a&w=0&h=ULdjL71JmtppFiwF_9-9TF00ZTr--5VYsuu0Gaf-9XA=" alt="banner 2" />
                        </div>
                    </Carousel>
                </CarouselContainer>
            ) : (
                <ContainerImageBanner img={Bannermb} />
            )}
        </React.Fragment>
    )
}

export { CarouselComponent };