// DarkModeContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { darkModeReducer } from "./darkModeReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, dispatch] = useReducer(darkModeReducer, false);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  const setDarkModeFromStorage = async () => {
    try {
      const storedMode = await AsyncStorage.getItem("colorScheme");
      if (storedMode) {
        dispatch({ type: "TOGGLE_DARK_MODE" });
      }
    } catch (error) {
      console.error("Error fetching dark mode state from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    setDarkModeFromStorage();
  }, []);

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
