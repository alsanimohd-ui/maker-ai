"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Read persisted language from localStorage if available
    const savedLang = localStorage.getItem("maker_ai_lang") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLang(savedLang);
    }
    setIsMounted(true);
  }, []);

  // Update HTML attributes dynamically when language changes
  useEffect(() => {
    if (isMounted) {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      localStorage.setItem("maker_ai_lang", lang);
    }
  }, [lang, isMounted]);

  // Prevent flash of untranslated content during client hydration
  if (!isMounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className={`transition-opacity duration-300 ${lang === "ar" ? "font-arabic" : ""}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: "en" as Language,
      setLang: () => {},
    };
  }
  return context;
};
