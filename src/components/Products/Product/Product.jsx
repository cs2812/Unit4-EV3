import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./pro.module.css"
const Product = () => {
  const{cart,updateCart,remove}=useContext(CartContext)
  const[count,setCount]=useState(0)
  const[pro,setPro]=useState([])
  console.log("product",pro)


  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then((r)=>{
      console.log(r.data)
      setPro(r.data)
    })
  },[])
  // Note: this id should come from api
  
  return (
    <>
    {pro.map((product)=>(
    <div className={styles.inpro}>
      
    <div data-cy={`product-${product.id}` }>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>{
        updateCart(product)}}>Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
        Count: {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>remove(product.id)} >Remove</button>
      </div>
    </div>
   </div>

    ))}
   </> 

  );
};

export default Product;
