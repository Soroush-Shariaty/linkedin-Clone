import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    detection: {
      order: [
        "localStorage",
        "cookie",
        "htmlTag",
        "querystring",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/assets/locales/{{ns}}/{{lng}}.json",
    },
    ns: ["feed", "mynetwork", "user", "messaging"],
    react: {
      useSuspense: false,
    },
  });

export default i18n;
