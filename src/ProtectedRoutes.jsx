import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ element }) {
    const  {isAuthenticated} = useAuth();
  return isAuthenticated ? element : <Navigate to='/login'/>
}

export default ProtectedRoutes