import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Views/Pages/Home";
import Store from "../Views/Pages/Store";
import About from "../Views/Pages/About";
const AppRoutes = () => {
  return (
    <>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/About" element={<About />} />
        </Routes>

    </>
  );
};

export default AppRoutes;
