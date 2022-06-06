import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import styles from "./style.module.css"


const Products = () => {


  return (
    <>
      <h1>Products</h1>
      <div className={styles.pro}>
     <Product />

    </div>

    </>
    
  )
};

export default Products;
