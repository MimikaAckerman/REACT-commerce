import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Pages/Home";
import Cart from "../Views/Components/Cart/Cart";
import About from "../Views/Pages/About";

import ProductContainer from "../Views/Components/ProductContainer/ProductContainer";
 import Navbar from "./../Views/Layout/Navbar/Navbar"; 

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<ProductContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
