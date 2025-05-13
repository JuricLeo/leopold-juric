import { create } from "zustand";

interface LanguageState {
  selectedLanguage: string;
  translations: Record<string, Record<string, string>>;
  setSelectedLanguage: (language: string) => void;
  t: (key: string) => string;
}

const useLangStore = create<LanguageState>((set) => {
  const translations = require("@/constants/lang.json");
  let selectedLanguage = "en";

  if (typeof window !== "undefined") {
    selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  }

  return {
    selectedLanguage,
    translations: translations,
    setSelectedLanguage: (language) => {
      selectedLanguage = language;
      set({ selectedLanguage: language });
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", language);
      }
    },
    t: (key) => translations[selectedLanguage][key] || key,
  };
});

export default useLangStore;
