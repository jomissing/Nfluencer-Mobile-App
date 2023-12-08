import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetails, dispatch] = useReducer(authReducer, null);

  const value = {
    userDetails,
    setUserDetails: (details) =>
      dispatch({ type: "SET_USER", payload: details }),
    clearUserDetails: () => dispatch({ type: "CLEAR_USER" }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
