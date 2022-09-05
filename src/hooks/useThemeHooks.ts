import { useContext } from "react";
import { IsDarkModeContext } from "../context/ThemeProvider";

export const useThemeContext = () => {
  return useContext(IsDarkModeContext);
};
