import { createContext, useContext, useReducer } from "react";
import { darkModeReducer } from "./darkModeReducer";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, dispatch] = useReducer(darkModeReducer, false);

  const value = {
    isDarkMode,
    toggleDarkMode: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
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
