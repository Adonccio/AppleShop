'use client'
const { createContext, useContext } = require("react");
import { useState, useEffect } from "react";

const CartContext = createContext({})

export const CartProvider = ({children}) =>
{
    const [ cart, setCart] = useState([])

    function localdata () {
        const storedCart= localStorage.getItem('cart-appleshop')
        console.log(storedCart)
        if(storedCart) {setCart(JSON.parse(storedCart))} else {[]}}
        
     useEffect(() => localdata && localdata(), []
      )
  
    const addProduct = (product) => {
        let updatedCart = cart;
        updatedCart.push(product)
        setCart(updatedCart);
        localStorage.setItem('cart-appleshop', JSON.stringify(updatedCart))
        location.reload()
        
        }
      
     const removeProduct = (productId) => {
            const productIndex = cart.findIndex(product => product.id === productId)
        
            if (productIndex !== -1) {
              const updatedCart = [...cart]
              updatedCart.splice(productIndex, 1)
              setCart(updatedCart)
              localStorage.setItem('cart-appleshop', JSON.stringify(updatedCart))
              // location.reload()
            }
          }
        
    return (
    <CartContext.Provider value={{cart, setCart, addProduct, removeProduct}}>
        {children}
    </CartContext.Provider>
    )
   
}

export const useCartContext = () => useContext(CartContext)