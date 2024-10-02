import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { checkAuth } from "./authHelpers.js";
import { sendRequest } from "../apiService.js";

const AuthContext = createContext();


export const AuthProvider = ({ children }) =>{
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() =>{
    
    const authenticate = async () => {
      const user = await checkAuth();
      if (user) {
        setUser(user)
        navigate('/lobby');

      }
      
    };

    authenticate();
  },[navigate])


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