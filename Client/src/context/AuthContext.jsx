import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { checkAuth } from "./authHelpers.js";
import { sendRequest } from "../apiService.js";

const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() =>{
    
    const authenticate = async () => {
      
      if (!user) {
        const userAuth = await checkAuth();        
        setUser(userAuth)
      }

      if (location.pathname === '/' && user) {
        navigate('/lobby')
      }   
    }
    
    authenticate();
    
  },[user,navigate,location])


  const login = (userData) => {
    setUser(userData);
    
    navigate('/lobby');
  };

  const logout = async () => {
    await sendRequest('/logout')
    
    setUser(null);
    navigate('/'); 
  };

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};