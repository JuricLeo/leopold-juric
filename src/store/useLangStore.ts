import { create } from "zustand";
import translations from "@/constants/lang.json";

interface LanguageState {
  selectedLanguage: string;
  translations: Record<string, unknown>;
  setSelectedLanguage: (language: string) => void;
  t: (key: string) => string;
}

const useLangStore = create<LanguageState>((set) => {
  let selectedLanguage = "en";
  const hasLocalStorageGetItem =
    typeof globalThis.localStorage?.getItem === "function";
  const hasLocalStorageSetItem =
    typeof globalThis.localStorage?.setItem === "function";

  if (typeof window !== "undefined" && hasLocalStorageGetItem) {
    selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  }

  // Helper function to access nested object properties using a path string
  const getNestedValue = (obj: unknown, path: string): unknown => {
    return path.split(".").reduce((prev, curr) => {
      if (prev && typeof prev === "object" && curr in prev) {
        // @ts-expect-error: Index signature
        return prev[curr];
      }
      return undefined;
    }, obj);
  };

  return {
    selectedLanguage,
    translations: translations,
    setSelectedLanguage: (language) => {
      selectedLanguage = language;
      set({ selectedLanguage: language });
      if (typeof window !== "undefined" && hasLocalStorageSetItem) {
        localStorage.setItem("selectedLanguage", language);
      }
    },
    t: (key) => {
      const lang = selectedLanguage as keyof typeof translations;
      const translatedValue = getNestedValue(translations[lang], key);
      return typeof translatedValue === "string" ? translatedValue : key;
    },
  };
});

export default useLangStore;
