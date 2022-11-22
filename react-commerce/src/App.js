import React from "react";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import Login from "./Views/Components/Form/Login";

import Register from "./Views/Components/Form/Register";

import { LoginContext } from "./context/LoginContext";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");


  return (
    <>
    <LoginContext.Provider value={[name,setName]}>
      <AppRoutes/>
      <Register/>
      <Login/>
      </LoginContext.Provider>             


    </>
  );
}

export default App;
