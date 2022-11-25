import React from "react";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import LoginPage from "./Views/Components/Form/LoginPage";
import Register from "./Views/Components/Form/Register";

import { LoginProvider } from "./context";


function App() {



  return (
    <>
     <LoginProvider>
      <AppRoutes />
   
    


     </LoginProvider>
    </>
  );
}

export default App;
