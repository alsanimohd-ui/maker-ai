"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "nordic" | "dark" | "light" | "parchment" | "market" | "symphony";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("nordic");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setThemeState("nordic");
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = document.documentElement;
      root.classList.remove("dark", "light", "theme-parchment", "theme-nordic", "theme-market", "theme-symphony");
      root.classList.add("theme-nordic");
      localStorage.setItem("maker_ai_theme", "nordic");
    }
  }, [theme, isMounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState("nordic");
  };

  const toggleTheme = () => {
    setThemeState("nordic");
  };

  if (!isMounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "nordic" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
};
