import React from "react";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import Login from "./Views/Components/Form/Login";

import Register from "./Views/Components/Form/Register";


function App() {



  return (
    <>
      <AppRoutes />
      <Register/>
     <Login/>
    </>
  );
}

export default App;
