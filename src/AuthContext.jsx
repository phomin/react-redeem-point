import React from 'react'
import { createContext,useContext,useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const token = localStorage.getItem('token')
    const [isAuthenticated, setAuthenticated] = useState(token);

    const login = async () => {
     
     
      
    }
    const logout = () => {
        setAuthenticated(false)
    }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    return useContext(AuthContext);
}