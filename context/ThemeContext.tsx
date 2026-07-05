"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "dark" | "light" | "parchment" | "nordic" | "gallery";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("maker_ai_theme") as Theme;
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "parchment" || savedTheme === "nordic" || savedTheme === "gallery") {
      setThemeState(savedTheme);
    } else {
      setThemeState("dark");
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = document.documentElement;
      root.classList.remove("dark", "light", "theme-parchment", "theme-nordic", "theme-gallery");
      if (theme === "dark") {
        root.classList.add("dark");
      } else if (theme === "light") {
        root.classList.add("light");
      } else if (theme === "parchment") {
        root.classList.add("theme-parchment");
      } else if (theme === "nordic") {
        root.classList.add("theme-nordic");
      } else if (theme === "gallery") {
        root.classList.add("theme-gallery");
      }
      localStorage.setItem("maker_ai_theme", theme);
    }
  }, [theme, isMounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "parchment";
      if (prev === "parchment") return "nordic";
      if (prev === "nordic") return "gallery";
      return "dark";
    });
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
      theme: "dark" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
};
