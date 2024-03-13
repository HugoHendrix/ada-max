import { createContext, useState, useEffect } from "react";
import pt from "../lang/pt-BR.json";
import en from "../lang/en.json"

type I18nContextType = {
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
  translations: {
    [key: string]: {
      [key: string]: string;
    };
  };
};


export const I18nContext = createContext<I18nContextType>(null as unknown as I18nContextType);

export function I18nContextProvider({children}: {children: React.ReactNode}) {
  const [currentLanguage, setCurrentLanguage] = useState("pt")

  const translations = {
    pt,en
  }

  useEffect(() => {
    const lang = localStorage.getItem("@lang")
    if (lang) {
      setCurrentLanguage(lang)
    } else {
      setCurrentLanguage(navigator.language)
      localStorage.setItem("@lang", navigator.language)
    }
  }, [])

  return (
    <I18nContext.Provider value={{
      currentLanguage, setCurrentLanguage, translations
    }}>
      {children}
    </I18nContext.Provider>
  )
}