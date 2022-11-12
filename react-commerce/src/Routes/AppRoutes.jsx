import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Views/Pages/Home";
import Cart from "../Views/Components/Cart/Cart";
import About from '../Views/Pages/About'

import ProductCart from "../Views/Components/ProductCard/ProductCart";

const AppRoutes = () => {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Store" element={<ProductCart/>}/>
        </Routes>

    </>
  );
};

export default AppRoutes;
