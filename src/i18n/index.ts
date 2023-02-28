import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

export enum Languages {
  EN = "en",
  UK = "uk",
}

const resources: { [key in Languages]: Resource } = {
  en: { translation: en },
  uk: { translation: uk },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
