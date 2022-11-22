import React from "react";
import { useContext } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { LoginContext } from "../../../context/LoginContext";

import { fetchUsers } from "../../../Api/fetchUsers";
import { useState } from "react";


const LoginPage = (initialLogin) => {
  const { login } = useContext(LoginContext);


 







  
  const onLogin = () => {
    login("mimika ackerman");

    /*  useNavigate("/" ,{
    replace:true,
  }); */
  };

  return (
    <>
      

        <button onClick={onLogin}>login</button>
   
    </>
  );
};
export default LoginPage;
