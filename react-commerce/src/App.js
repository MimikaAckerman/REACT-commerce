import React from "react";
import "./App.css";
import { CartProvider } from "./context/cart-context";
import { LoginProvider } from "./context/LoginProvider";
import AppRoutes from "./Routes/AppRoutes";


function App() {
  return (
    <>
    <LoginProvider>
      <CartProvider>
      <AppRoutes />

      </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;
