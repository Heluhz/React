import React, { createContext, useState,useContext } from 'react';

// Create the context
const UserAuthContext = createContext();

// Create the provider component
export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom hook to use the UserAuthContext
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};