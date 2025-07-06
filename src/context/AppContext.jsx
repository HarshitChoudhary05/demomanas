import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // Example: user state
  const [theme, setTheme] = useState('light'); // Example: theme state

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ user, theme, login, logout, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
