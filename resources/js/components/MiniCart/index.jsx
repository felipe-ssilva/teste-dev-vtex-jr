import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useTestContext } from '../../context'
import { Cookies } from 'react-cookie'
import { IoClose } from 'react-icons/io5'
import { BsCart4 } from 'react-icons/bs'
import { formatValue } from '../../helpers/utils'

const MiniCart = () => {
  const { updateCart, setUpdateCart, removeItem } = useTestContext()
  const cookies = new Cookies()
  const [openMinicart, setOpenMiniCart] = useState(false)
  const cartItems = cookies.get('cartListFrame')
  const totalCart = cartItems?.length || 0

  useEffect(() => {
    if (updateCart) {
      setOpenMiniCart(true)
      setUpdateCart(false)
    }
  }, [updateCart])
  return (
    <>
      {openMinicart && <div className="miniCartOverlay"></div>}
      <div className="miniCart">
        <div className="miniCartContent">
          <button
            className="miniCartButton resetButton"
            onClick={() => setOpenMiniCart(true)}
          >
            <BsCart4 className="miniCartIcon" size="20" />

            <span className="miniCartQtty">{totalCart}</span>
          </button>
        </div>
        {openMinicart && (
          <div className="miniCartItems">
            <div className="miniCartHeader">
              <h5 className="miniCartHeader--title">Meu carrinho</h5>
              <button
                className="miniCartClose"
                title="Fechar"
                onClick={() => setOpenMiniCart(false)}
              >
                <IoClose className="miniCartClose--icon" color="#5f3473" />
              </button>
            </div>
            <div className="miniCartBody">
              {cartItems.length > 0 ? (
                <div className="miniCartProductList">
                  {cartItems &&
                    cartItems.map((item, index) => {
                      const { qtty, info } = item
                      const {
                        image: imageUrl,
                        name: productName,
                        priceSpecification,
                        sku: productId,
                      } = info

                      const { price } = priceSpecification

                      return (
                        <div
                          key={`miniCartProduct-${index}`}
                          className="miniCartProduct"
                        >
                          <button
                            className="miniCartProduct--remove"
                            onClick={() => removeItem(productId)}
                          >
                            <IoClose className="miniCartProduct--remove-icon" />
                          </button>
                          <div className="miniCartProduct--picture">
                            <img
                              src={imageUrl}
                              alt={productName}
                              className="miniCartProduct--image"
                            />
                          </div>
                          <div className="miniCartProduct--info">
                            <div className="miniCartProduct--name">
                              {productName}
                            </div>
                            {qtty && (
                              <div className="miniCartProduct--qtty">
                                <strong>Qtd.:</strong> {qtty}
                              </div>
                            )}
                            <div className="miniCartProduct--price">
                              {formatValue(price, 'normal')}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </div>
              ) : (
                <div className="miniCartEmpty">
                  <p>Seu carrinho está vazio</p>
                </div>
              )}
            </div>
            <div className="miniCartFooter">
              <a href="/#checkout" className="miniCartGoToCheckout">
                Finalizar compra
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MiniCart
