import { createContext, useState, useEffect } from "react";

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
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR")

  const translations = {
    "pt-BR": {
      home: "Inicio",
      login: "Login",
      signIn: "Entrar",
      signUp: "Assine agora",
      started: "Começar",
      description: "Digite o endereço de e-mail e a senha da sua conta Max ou HBO Max.",
      email: "Endereço de e-mail",
      password: "Senha",
      invalidCredentials: "Credenciais inválidas",
    },
    "en": {
      home: "Home",
      login: "Sign Up Now",
      signIn: "Sign In",
      signUp: "Sign Up Now",
      started: "Get Started",
      description: "Enter your Max or HBO Max account email address and password.",
      email: "Email Address",
      password: "Password",
      invalidCredentials: "Invalid credentials",
    }
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