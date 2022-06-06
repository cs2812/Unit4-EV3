import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./nav.module.css"

// use react-router Link or NavLink


const Navbar = () => {
  const navigate=useNavigate()
  const{cart}=useContext(CartContext)
  let gotologin=()=>{
    navigate("/login")
  }
  return (
    <div data-cy="navbar" className={styles.nav}>
      <Link data-cy="navbar-home-link" to={"/"}>Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:{cart.length}</span>
      <button data-cy="navbar-login-logout-button" onClick={gotologin}>Login</button>
    </div>
  );
};

export default Navbar;
