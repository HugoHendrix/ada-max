import { useContext } from "react";
import { I18nContext } from "../context/I18nContext";

export function useI18n() {
  const value = useContext(I18nContext);

  return value;
}

export function useTranslations() {
  const { currentLanguage, translations } = useI18n();
  const t =  translations[currentLanguage];
  return t;
}