import React, { createContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { DarkTheme, lightTheme } from "../components/styles/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

type IsDarkModeContextProps = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export const IsDarkModeContext = createContext<IsDarkModeContextProps>(
  {} as IsDarkModeContextProps
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <IsDarkModeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <ThemeContext.Provider value={isDarkMode ? DarkTheme : lightTheme}>
        {children}
      </ThemeContext.Provider>
    </IsDarkModeContext.Provider>
  );
};
