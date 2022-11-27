import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Pages/Home";
import Cart from "../Views/Components/Cart/Cart";
import About from "../Views/Pages/About";

import Store from "../Views/Pages/Store";
 import Navbar from "./../Views/Layout/Navbar/Navbar"; 
import {PublicRoutes} from "./PublicRoutes";
import  PrivateRoutes  from "./PrivateRoutes";




const AppRoutes = () => {
  return (
    <>





      <BrowserRouter>
      
        <Navbar /> 
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Store />} />
      

        
          <Route path="/Cart" element=
          {<PrivateRoutes><Cart/></PrivateRoutes>} />
          
     
      
        </Routes>
      </BrowserRouter>
  
    </>
  );
};

export default AppRoutes;
