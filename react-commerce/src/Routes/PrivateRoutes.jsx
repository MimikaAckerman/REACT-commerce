import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../context'






const PrivateRoutes = ({children}) => {
    const {user,setUser} = useContext(LoginContext)

  return user ? children : <Navigate to='/'/>
}

export default PrivateRoutes