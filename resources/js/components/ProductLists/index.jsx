import React, { useEffect, useState } from 'react'
import 'tiny-slider/dist/tiny-slider.css'
import { formatValue } from '../../helpers/utils'
import { apiFramework, useTestContext } from '../../context/'
import './styles.scss'

const ProductLists = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState()
  const { addToCart } = useTestContext()

  const getProducts = async () => {
    try {
      const response = await apiFramework.get('')
      const { status, data } = response

      if (status === 200) {
        setProducts(data)
        setLoading(false)
      }
    } catch (e) {
      console.log('error', e)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!products && loading) {
      getProducts()
    }
  }, [products])

  if (loading) {
    return <></>
  }

  return (
    <div className="productList content">
      <div className="productListContent">
        {products && (
          <div className="productListItems">
            {products.map((product, index) => {
              const {
                image: imageUrl,
                name: productName,
                priceSpecification,
                sku: productId,
              } = product

              const {
                price,
                oldPrice: listPrice,
                discount,
              } = priceSpecification

              return (
                <div
                  key={`image-${index}`}
                  className="productListItem"
                  data-id={productId}
                >
                  <div className="productListItem--picture">
                    {discount && (
                      <span className="productListItem--discount">
                        {discount}% off
                      </span>
                    )}
                    <img
                      src={imageUrl}
                      alt={productName}
                      className="productListItem--picture-image"
                    />
                  </div>
                  <div className="productListItem--info">
                    <div className="productListItem--name">{productName}</div>
                    <div className="productListItem--prices">
                      <div className="productListItem--prices-listPrice">
                        {listPrice > 0 && (
                          <span className="productListItem--prices-listPrice-value">
                            de {formatValue(listPrice, 'normal')}
                          </span>
                        )}
                      </div>
                      <div className="productListItem--prices-bestPrice">
                        <span className="productListItem--prices-bestPrice-value">
                          por {formatValue(price, 'normal')}
                        </span>
                      </div>
                    </div>
                    <div className="productListItem--Button">
                      <a
                        title={productName}
                        className="productListItem--link"
                        onClick={(e) => addToCart(e, productId, product)}
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductLists
