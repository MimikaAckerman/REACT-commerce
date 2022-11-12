import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Views/Pages/Home";
import Cart from "../Views/Components/Cart/Cart";
import About from '../Views/Pages/About'

import ProductContainer from "../Views/Components/ProductContainer/ProductContainer";
const AppRoutes = () => {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Store" element={<ProductContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>

    </>
  );
};

export default AppRoutes;