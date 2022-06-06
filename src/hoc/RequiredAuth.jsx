import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext} from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const{isAuth}=useContext(AuthContext)
  console.log(isAuth)
  if(!isAuth){
    return <Navigate to={"/login"}/>
  }
  return children;
};

export default RequiredAuth;
