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
      const user = await checkAuth();
      user && setUser(user)
      if (location.pathname === '/') {
        navigate('/lobby')
      }

    };

    authenticate();
  },[navigate,location])


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