import React from "react";
import "./App.css";

import AppRoutes from "./Routes/AppRoutes";

import Register from "./Views/Components/Form/Register";

function App() {
  return (
    <>
      <AppRoutes />
      <Register />
    </>
  );
}

export default App;
