import { createContext, useContext, useReducer } from "react";
import { ReducerFunc } from "./ReducerFunc";
import React from "react";
const defaultCart = {
    counter: 0
};

const cartContext = createContext(defaultCart);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReducerFunc, {
        counter: 0,
        totalAmount: 0,
        productName: []
    });

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
