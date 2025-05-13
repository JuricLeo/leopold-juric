"use client";

import { useEffect } from "react";
import { useState } from "react";

import useLangStore from "@/store/useLangStore";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const languageOptions = [
  { label: "Hrvatski 🇭🇷", value: "hr" },
  { label: "English 🇬🇧", value: "en" },
];

export default function ChangeLanguage() {
  const setSelectedLanguage = useLangStore(
    (state) => state.setSelectedLanguage
  );
  const selectedLanguage = useLangStore((state) => state.selectedLanguage);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
      setInitialized(true);
    }
  }, [initialized, setSelectedLanguage]);

  const handleLanguageChange = (value: string) => {
    localStorage.setItem("selectedLanguage", value);
    window.location.reload();
    setSelectedLanguage(value);
  };

  return (
    <div>
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[280px] mt-2 md:hidden">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem
              className="capitalize"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="hidden md:block">
        <Button
          onClick={() =>
            handleLanguageChange(selectedLanguage === "en" ? "hr" : "en")
          }
          variant="ghost"
          size="icon"
          className="text-3xl"
        >
          {selectedLanguage === "hr" ? "🇭🇷" : "🇬🇧"}
        </Button>
      </div>
    </div>
  );
}
