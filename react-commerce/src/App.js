import React from "react";
import "./App.css";

import { LoginProvider } from "./context/LoginProvider";
import AppRoutes from "./Routes/AppRoutes";
import Search from "./Views/Components/Search/Search";


function App() {
  return (
    <>
    <LoginProvider>
     
      <AppRoutes />
    <Search/>
      
      </LoginProvider>
    </>
  );
}

export default App;
