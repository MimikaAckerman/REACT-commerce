import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../context'

const PublicRoutes = ({children}) => {
    const {isLoggedIn} = useContext(LoginContext);
    console.log(isLoggedIn)
  return !isLoggedIn ? children: <Navigate to='/'/>
   
}

export default PublicRoutes