import React from "react";
import Register from "./../../Views/Components/Form/Register";
import LoginPage from "../Components/Form/LoginPage";
import "./../../design/home.css";

const Home = () => {
  return (
    <>
      <div className="container-forms">
        <Register />
        <LoginPage />
      </div>
    </>
  );
};

export default Home;
