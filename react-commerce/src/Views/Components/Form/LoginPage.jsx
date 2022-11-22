import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";

import { fetchUsers } from "../../../Api/fetchUsers";
import { useState, useEffect } from "react";




const LoginPage = () => {
  const { login } = useContext(LoginContext);


  const onLogin = () => {
    login("mimika ackerman");

    useNavigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <form>
        <input type="text" placeholder="enter your username" />
        <input type="text" placeholder="enter your passsword" />
        <button onClick={onLogin}>login</button>
      </form>
    </>
  );
};
export default LoginPage;
