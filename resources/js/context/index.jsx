// import { useEffect, useState } from 'react'
import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'

export const TestContext = createContext({})

export const apiFramework = axios.create({
  baseURL: 'https://run.mocky.io/v3/91af60d6-7265-4aa5-ae9b-c13ee3d247a8',
})
export const TestContextProvider = ({ children }) => {
  const cookies = new Cookies()
  const [updateCart, setUpdateCart] = useState(false)

  const checkProductInCart = (producId) => {
    const cartList = cookies.get('cartListFrame')
    if (cartList) {
      const cart = cartList.filter((item) => item.id === producId)
      return cart.length > 0 ? true : false
    }
    return false
  }

  const removeItem = (producId) => {
    const cartList = cookies.get('cartListFrame')

    for (var i = 0; i < cartList.length; i++) {
      if (cartList[i].id === producId) {
        cartList.splice(i, 1)
      }
    }
    cookies.set('cartListFrame', JSON.stringify(cartList))
    setUpdateCart(true)
  }

  const addToCart = (e, producId, productInfo) => {
    console.log('add', producId, productInfo)
    if (producId) {
      const cartList = cookies.get('cartListFrame')
      if (!cartList) {
        const cartItem = [
          {
            id: producId,
            qtty: 1,
            info: productInfo,
          },
        ]
        cookies.set('cartListFrame', JSON.stringify(cartItem))
      } else {
        const cartItems = []
        const checkId = checkProductInCart(producId)
        if (checkId) {
          cartList.map((item) => {
            const { id, qtty } = item
            if (id === producId) {
              item.qtty = qtty + 1
            }

            cartItems.push(item)
          })
          setUpdateCart(true)
        } else {
          const newItem = [
            {
              id: producId,
              qtty: 1,
              info: productInfo,
            },
          ]
          cartItems.push(...cartList, ...newItem)
        }
        console.log('cartItems', cartItems)
        cookies.set('cartListFrame', JSON.stringify(cartItems))
        setUpdateCart(true)
      }
    }
    console.log('fim')
    setUpdateCart(true)
    e.preventDefault()

    return true
  }

  return (
    <TestContext.Provider
      value={{ addToCart, updateCart, setUpdateCart, removeItem }}
    >
      {children}
    </TestContext.Provider>
  )
}

export const useTestContext = () => useContext(TestContext)
