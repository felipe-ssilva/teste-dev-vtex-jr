import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import {
  MinicartButton,
  MinicartPopup,
  MinicartOverlay,
  MinicartPopupHeader,
  MinicartPopupBody,
  MinicartPopupEmpty,
  MinicartPopupBackButton,
  MinicartPopupItem,
  MinicartPopupCheckoutButton,
} from "./styles";
import { setIsMiniCartOpen } from "../../store/minicart/actions";
import { removeFromCart } from "../../store/cart/actions";
import { BsCart } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Minicart: React.FC = () => {
  const globalState = useSelector((state: RootState) => state);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState("0,00");
  const dispatch = useDispatch();

  useEffect(() => {
    setCartQuantity(globalState.cart.items.length);

    let cartValueSum = 0;
    globalState.cart.items.map((item: any) => {
      cartValueSum += item.priceSpecification.price;
    });
    setCartTotal(cartValueSum.toFixed(2).toString().replace(".", ","));
  }, [globalState]);

  return globalState.minicart.isMinicartOpen ? (
    <>
      <MinicartPopup>
        <MinicartPopupHeader>
          <h2>Meu Carrinho</h2>
          <MinicartButton onClick={() => dispatch(setIsMiniCartOpen())}>
            <BsCart color={"white"} size={30} />
            <span className="quantity">{cartQuantity}</span>
            <span className="total">VOLTAR</span>
          </MinicartButton>
        </MinicartPopupHeader>

        <MinicartPopupBody>
          {globalState.cart.items.length == 0 ? (
            <MinicartPopupEmpty>
              <BsCart color={"black"} size={50} />
              <p>Seu carrinho está vazio</p>
              <MinicartPopupBackButton
                onClick={() => dispatch(setIsMiniCartOpen())}
              >
                Continuar comprando
              </MinicartPopupBackButton>
            </MinicartPopupEmpty>
          ) : (
            globalState.cart.items.map((item: any) => {
              const price = item.priceSpecification.price
                .toFixed(2)
                .toString()
                .replace(".", ",");
              return (
                <MinicartPopupItem key={item.sku}>
                  <img src={item.image} />
                  <p className="name">{item.name}</p>
                  <p className="price">R$ {price}</p>
                  <button
                    className="delete"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <MdDelete color="#dc3545" />
                  </button>
                </MinicartPopupItem>
              );
            })
          )}
        </MinicartPopupBody>
        {globalState.cart.items.length > 0 && (
          <MinicartPopupCheckoutButton
            onClick={() => alert("Em desenvolvimento...")}
          >
            <p className="total">R$ {cartTotal}</p>
            <span className="divisor"></span>
            <p className="text">Finalizar pedido</p>
          </MinicartPopupCheckoutButton>
        )}
      </MinicartPopup>
      <MinicartOverlay onClick={() => dispatch(setIsMiniCartOpen())} />
    </>
  ) : (
    <MinicartButton onClick={() => dispatch(setIsMiniCartOpen())}>
      <BsCart color={"white"} size={30} />
      <span className="quantity">{cartQuantity}</span>
      <span className="total">R$ {cartTotal}</span>
    </MinicartButton>
  );
};

export default Minicart;
