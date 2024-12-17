'use client'

import { useState, createContext, useContext, useEffect } from "react";

// create context 
export const SearchContext = createContext();

// provider 
export const SearchContextProvider = ({children})=> {
const [searchActive, setSearchActive] = useState(false);
const [theme, setTheme] = useState('light')

// theme switch handler
useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

const handleThemeSwitch = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};


    return (
      <SearchContext.Provider
        value={{
          searchActive,
          setSearchActive,
          theme,
          setTheme,
          handleThemeSwitch,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
};

export const useSearchContext = () => useContext(SearchContext);