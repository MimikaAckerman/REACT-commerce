import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../context";


import React from 'react'

export const PublicRoutes = ({children}) => {
    const {isLoggedIn} = useContext(LoginContext)
        console.log(isLoggedIn)
    
 return !isLoggedIn ? children :<Navigate to = '/Home'/>
}

