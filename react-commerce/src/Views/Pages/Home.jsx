import React from "react";
import Register from "./../../Views/Components/Form/Register";
import LoginPage from "../Components/Form/LoginPage";
import "./../../design/Home.css";

const Home = () => {
  return (
    <>
      <div className="container-forms">
        <div className="register-box">
        <Register />
        </div>
        <div className="login-box">
        <LoginPage />
        </div>
        
        </div>
    
   
    </>
  );
};

export default Home;
