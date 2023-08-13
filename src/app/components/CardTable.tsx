'use client'
import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "vm"

type CartContextType = {
    cart: any
    addProduct: (product: any) => void
    removeProduct: (product: any) => void
}

const CartContext: any = createContext({} as CartContextType)

export const CartContextProvider = (
    props: {
        children?: ReactNode
    }
) => {
    const [ cart, setCart] = useState<any[]>([])

    useEffect(() => {
        const storedCart = localStorage.getItem('cart-appleshop')
        if(storedCart) {setCart(JSON.parse(storedCart))} else []}
        )
    
    const addProduct = (product: any) => {
        const updatedCart = [...cart, product]
        localStorage.setItem('cart-appleshop', JSON.stringify(updatedCart))
        setCart(updatedCart)
    }

    const removeProduct = (prodctId: number) => {
        const productIndex = cart.findIndex((product) => prodctId === product.id)

        if (prodctId!== -1){
            const updatedCart = [...cart]
            updatedCart.splice(productIndex, 1)
            localStorage.setItem('cart-appleshop', JSON.stringify(updatedCart))
            setCart(updatedCart)
        }
    }

    return (
        <CartContext.Provider
          value={{ cart, addProduct, removeProduct }}
        >
          {props.children}
        </CartContext.Provider>
      );
}

export const UseCart = () => useContext(CartContext)