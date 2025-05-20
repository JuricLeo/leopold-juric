import { create } from "zustand";
import translations from "@/constants/lang.json";

interface LanguageState {
  selectedLanguage: string;
  translations: Record<string, any>;
  setSelectedLanguage: (language: string) => void;
  t: (key: string) => string;
}

const useLangStore = create<LanguageState>((set) => {
  let selectedLanguage = "en";

  if (typeof window !== "undefined") {
    selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  }

  // Helper function to access nested object properties using a path string
  const getNestedValue = (obj: any, path: string): any => {
    return path.split(".").reduce((prev, curr) => {
      return prev && prev[curr] !== undefined ? prev[curr] : undefined;
    }, obj);
  };

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
      const translatedValue = getNestedValue(translations[lang], key);
      return translatedValue !== undefined ? translatedValue : key;
    },
  };
});

export default useLangStore;
