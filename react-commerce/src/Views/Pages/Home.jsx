import React from "react";
import LoginPage from "../Components/Form/LoginPage";
import Register from "../Components/Form/Register";

import "./../../design/Home.css";

const Home = () => {
  return (
    <>
      <div id="container">
        <div id="success-box">
          <div class="dot"></div>
          <div class="dot two"></div>
          <div class="face">
            <div class="eye"></div>
            <div class="eye right"></div>
            <div class="mouth happy"></div>
          </div>
          <div class="shadow scale"></div>
          <div class="message">
            <h1 class="alert">
              <h6>Hi! User</h6>
            </h1>
            <Register />
            <p></p>
            <LoginPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
