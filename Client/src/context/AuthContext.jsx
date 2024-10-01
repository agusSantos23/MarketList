import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() =>{
    
    const checkAuth = async () =>{
      try {
        const response = await api.get('/verify-token'); 
        setUser(response.data.user); 
      } catch (error) {
        console.log('Not authenticated', error);
        navigate('/');
      }
    }

    checkAuth()
  },[navigate])

  const login = async (userData) => {
    try {
      const response = await api.post('/login', userData);
      setUser(response.data.user);
      navigate('/lobby');
    } catch (error) {
      console.error('Login failed', error); // Manejo de errores
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/'); 
  };

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};