import React, { useEffect, useState } from "react";
import {
  ShelfContainer,
  ShelfItem,
  ShelfItemImage,
  ShelfItemPriceContainer,
  ShelfItemOldPrice,
  ShelfItemPrice,
  ShelfItemProductName,
  ShelfItemDiscountFlag,
  ShelfItemAddToCartButton,
  Loader,
} from "./styles";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/actions";

interface ShelfItem {
  sku: string;
  name: string;
  image: string;
  priceSpecification: {
    price: number;
    oldPrice: number;
    discount: number;
  };
  isInCart?: boolean;
}

const Shelf: React.FC<{ shelfId: string }> = ({ shelfId }) => {
  const [shelfItems, setShelfItems] = useState<Array<ShelfItem>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const cart = useSelector((state: { cart: { items: [] } }) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && getShelfItems(shelfId);
    setInCartItems();
  }, [cart]);

  const getShelfItems = async (shelfId: string) => {
    const response = await fetch(`https://run.mocky.io/v3/${shelfId}`);
    const result = await response.json();
    setShelfItems(result);
    setIsLoading(false);
  };

  const setInCartItems = () => {
    const verifiedShelfItems = shelfItems?.map((item) => {
      const verify = cart.items.filter(
        (cartItem: { sku: string }) => cartItem.sku == item.sku
      );
      item.isInCart = verify.length > 0;
      return item;
    });
    setShelfItems(verifiedShelfItems);
  };

  return !isLoading ? (
    <ShelfContainer>
      {shelfItems?.map((shelfItem) => {
        const { oldPrice, price, discount } = shelfItem.priceSpecification;
        return (
          <ShelfItem key={shelfItem.sku}>
            {discount && (
              <ShelfItemDiscountFlag>{discount}% OFF</ShelfItemDiscountFlag>
            )}
            <ShelfItemImage src={shelfItem.image} />
            <ShelfItemPriceContainer>
              {oldPrice && (
                <ShelfItemOldPrice>
                  R$ {oldPrice.toFixed(2).replace(".", ",")}{" "}
                </ShelfItemOldPrice>
              )}
              <ShelfItemPrice>
                R$ {price.toFixed(2).replace(".", ",")}
              </ShelfItemPrice>
            </ShelfItemPriceContainer>
            <ShelfItemProductName>{shelfItem.name}</ShelfItemProductName>
            <ShelfItemAddToCartButton
              onClick={() => {
                shelfItem.isInCart
                  ? dispatch(removeFromCart(shelfItem))
                  : dispatch(addToCart(shelfItem));
              }}
              className={shelfItem.isInCart ? "inCart" : ""}
            >
              <div className="icon">
                <BsCart color={"white"} size={20} />
              </div>
              <div className="text">
                {shelfItem.isInCart
                  ? "Remover do carrinho"
                  : "Adicionar ao carrinho"}
              </div>
            </ShelfItemAddToCartButton>
          </ShelfItem>
        );
      })}
    </ShelfContainer>
  ) : (
    <Loader />
  );
};

export default Shelf;
