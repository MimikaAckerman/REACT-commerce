import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../Api/fetchUsers";
import { LoginContext } from "../../../context";

const LoginPage = () => {
  const { login } = useContext(LoginContext);

  const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/Users";
  

  useEffect(() => {
    const connection = async () => {
      const data = await fetchUsers(url);
      setUsers(data);
    };
    connection();
  }, [url]);

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
