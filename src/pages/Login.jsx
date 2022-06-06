import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const{isAuth,toggle}=useContext(AuthContext)
  const[email,setEmail]=useState("")
  const navigate=useNavigate()
  const[password,setPassword]=useState('')
let handlesubmit=(e)=>{
e.preventDefault()
// console.log(e)
axios({
  url:"https://reqres.in/api/login",
  method:"POST",
  data:{email,password}
}).then((r)=>{
  // console.log(r.data)
toggle()
navigate("/")
})
}
  
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input data-cy="login-email" type="email" value={email} 
      onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/><br />
      <input data-cy="login-password" value={password}
      onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
      <button data-cy="login-submit" type="submit"> Login</button>
      </form>
    </div>
  );
};

export default Login;
