import { create } from "zustand";
import translations from "@/constants/lang.json";

interface LanguageState {
  selectedLanguage: string;
  translations: Record<string, Record<string, string>>;
  setSelectedLanguage: (language: string) => void;
  t: (key: string) => string;
}

const useLangStore = create<LanguageState>((set) => {
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
    t: (key) => {
      const lang = selectedLanguage as keyof typeof translations;
      return (
        translations[lang]?.[key as keyof (typeof translations)[typeof lang]] ||
        key
      );
    },
  };
});

export default useLangStore;
