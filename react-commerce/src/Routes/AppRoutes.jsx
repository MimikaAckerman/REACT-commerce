import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Store from "../Pages/Store";
import About from "../Pages/About";
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
