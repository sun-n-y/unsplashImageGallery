import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  };

  return (
    <GlobalContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);
