import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[cart,setCart]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/cartItems")
    .then((r)=>{
      setCart(r.data)
    })
  },[])

  let updateCart=(el)=>{
    setCart([...cart,{el}])
  }
  let remove=(id)=>{
    let del= cart.filter((item)=>item.id!==id)
    setCart(del)
  }
  return <CartContext.Provider value={{cart,updateCart,remove}}>{children}</CartContext.Provider>;
};
