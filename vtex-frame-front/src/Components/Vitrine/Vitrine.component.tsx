import { ReactNode, useEffect } from "react";
import { MainContainer, Container } from "../../Assets/Styles/MainStyles";
import { useProductContext } from "../../Providers/ProductProvider";
import { Product } from "../../Static/Data/InitialDataProductContext";
import { ProductComponent } from "../Product/Produt.component";
import { ContainerVitrineRelative, GridContainer } from "./Styles";

const VitrineComponent:React.FC<ReactNode> = (props):JSX.Element => {

    const { productState: { products } } = useProductContext();

    useEffect(() => {
    }, [products]);

    return (
        <MainContainer>
            <Container>
                <ContainerVitrineRelative>
                    <GridContainer>
                        {!products.length ? false : products.map((product: Product, key:number) => {
                            return <ProductComponent product={product} key={key}/>
                        })}
                    </GridContainer>
                </ContainerVitrineRelative>
            </Container>
        </MainContainer>
    );
}


export { VitrineComponent }