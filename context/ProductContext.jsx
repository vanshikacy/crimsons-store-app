
'use client'

{/*global context*/}

import { createContext, useContext, useState } from "react"

const ProductContext=createContext()

export default function ProductsProvider(props){
    const { children } = props
    const [cart, setCart] =useState({})

    function handleIncrementProduct(price_id, num, data, noIncrement=false){
       const newCart={
        ...cart
       }

       if(price_id in cart){
        //the product is already in the cart so take
        //the previous value and increment/decrement it
        newCart[price_id]= newCart[price_id]+num

        newCart[price_id]= {
            ...data, 
            quantity: noIncrement? num: newCart[price_id]?.quantity+num
        }
       }
       else {
        //product not yet in cart, so add it
        newCart[price_id]={
            ...data, quantity: num
        }
       }

       if(Number(newCart[price_id].quantity) <= 0){
        //the user has set teh number to 0, so 
        //we need to remove it from the cart
        delete newCart[price_id]
       }
      //overwrite the cart state 
      //with the newCart object
       setCart(newCart)
    }
         

    function handleRemoveProduct(priceId) {
  setCart(prev => {
    const newCart = { ...prev };
    delete newCart[priceId];
    return newCart;
  });
}

    const value ={
        cart, handleIncrementProduct, handleRemoveProduct,
    }

    return(
        <ProductContext.Provider value={value}>
          {children}
          {/* everything in the app is wrapped into
          this global wrapper */}
        </ProductContext.Provider>
    )
}

export const useProducts = () =>
    useContext(ProductContext)