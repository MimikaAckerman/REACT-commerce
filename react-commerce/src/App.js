import React from "react";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";


import Register from "./Views/Components/Form/Register";

import { LoginContext } from "./context/LoginContext";
import { useState } from "react";


function App() {
  const [name, setName] = useState("");


  return (
    <>
  {/*   <LoginContext.Provider value={[name,setName]} > */}
      <AppRoutes/>
      

{/*       </LoginContext.Provider>        */}      


    </>
  );
}

export default App;
