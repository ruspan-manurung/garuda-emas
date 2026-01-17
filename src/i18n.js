import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hero1_title: "Looking for a car?",
        hero1_desc: "Enjoy premium car rental with professional drivers.",
      },
    },
    id: {
      translation: {
        hero1_title: "Mau cari mobil apa?",
        hero1_desc: "Nikmati kenyamanan perjalanan dengan armada profesional.",
      },
    },
  },
  lng: "id",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;