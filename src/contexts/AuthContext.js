import React, { createContext, useState, useContext } from 'react';



export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', loggedIn: false });

  const login = (name) => {
    setUser({ name, loggedIn: true });
  };

  const logout = () => {
    setUser({ name: '', loggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};