import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Products from "../components/Products/Products";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const Home = () => {
  return( 
  <div>

<Products/>

  </div>
  )
};

export default Home;
