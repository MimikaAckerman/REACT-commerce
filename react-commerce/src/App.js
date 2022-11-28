import React from "react";
import "./App.css";

import { LoginProvider } from "./context/LoginProvider";
import AppRoutes from "./Routes/AppRoutes";

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
