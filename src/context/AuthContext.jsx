import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const[isAuth,setAuth]=useState(false)
  let toggle=()=>{
    setAuth(!isAuth)
  }
  return <AuthContext.Provider value={{isAuth,toggle}}>{children}</AuthContext.Provider>;
};
