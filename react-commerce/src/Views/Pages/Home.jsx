import React from "react";
import Register from "./../../Views/Components/Form/Register";
import LoginPage from "../Components/Form/LoginPage";

import "../../design/Home.css";

const Home = () => {
  return (
    <>
      <div id="container">
        <div id="success-box">
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth happy"></div>
          </div>
          <div className="shadow scale"></div>
          <div className="message">
            <h1 className="alert">Register user</h1>
            <p>  <Register /></p>
          </div>
        </div>

        <div id="error-box">
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face2">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth happy"></div>
          </div>
          <div className="shadow move"></div>
          <div className="message">
            <h1 className="alert">Login User</h1>
            <p>
              <LoginPage />
            </p>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Home;
