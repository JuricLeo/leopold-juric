"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { useThemeContext } from "@/context/theme-data-provider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const availableThemeColors = [
  {
    name: "Caffeine",
    primary: "#644a40",
    secondary: "#ffdfb5",
    accent: "#e8e8e8",
    darkPrimary: "#ffe0c2",
    darkSecondary: "#393028",
    darkAccent: "#2a2a2a",
  },
  {
    name: "VintagePaper",
    primary: "#a67c52",
    secondary: "#e2d8c3",
    accent: "#d4c8aa",
    darkPrimary: "#c0a080",
    darkSecondary: "#4a4039",
    darkAccent: "#59493e",
  },
  {
    name: "Notebook",
    primary: "#606060",
    secondary: "#dedede",
    accent: "#f3eac8",
    darkPrimary: "#b0b0b0",
    darkSecondary: "#5a5a5a",
    darkAccent: "#e0e0e0",
  },
  {
    name: "NeoBrutalism",
    primary: "#ff3333",
    secondary: "#ffff00",
    accent: "#0066ff",
    darkPrimary: "#ff6666",
    darkSecondary: "#ffff33",
    darkAccent: "#3399ff",
  },
  {
    name: "KodamaGrove",
    primary: "#8d9d4f",
    secondary: "#decea0",
    accent: "#dbc894",
    darkPrimary: "#8a9f7b",
    darkSecondary: "#5a5345",
    darkAccent: "#a18f5c",
  },
  {
    name: "Doom64",
    primary: "#b71c1c",
    secondary: "#f0f0ff",
    accent: "#00ffcc",
    darkPrimary: "#e53935",
    darkSecondary: "#689f38",
    darkAccent: "#64b5f6",
  },
  {
    name: "Cyberpunk",
    primary: "#ff00c8",
    secondary: "#393028",
    accent: "#2a2a2a",
    darkPrimary: "#ff00c8",
    darkSecondary: "#1e1e3f",
    darkAccent: "#00ffcc",
  },
  {
    name: "Perpetuity",
    primary: "#06858e",
    secondary: "#d9eaea",
    accent: "#c9e5e7",
    darkPrimary: "#4de8e8",
    darkSecondary: "#164955",
    darkAccent: "#164955",
  },
];

export function ThemeToggle() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const nameChange = (name: string) => {
    return name.replace(/([A-Z])/g, " $1").trim();
  };

  const createSelectItems = () => {
    return availableThemeColors.map(
      ({
        name,
        primary,
        secondary,
        accent,
        darkPrimary,
        darkSecondary,
        darkAccent,
      }) => (
        <SelectItem key={name} value={name}>
          <div className="flex gap-2">
            <div className="flex gap-1 mt-1">
              <div
                style={{
                  backgroundColor: theme === "light" ? primary : darkPrimary,
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor:
                    theme === "light" ? secondary : darkSecondary,
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: theme === "light" ? accent : darkAccent,
                  width: "12px",
                  height: "12px",
                  borderRadius: "9999px",
                }}
              ></div>
            </div>
            <div className="text-sm">{nameChange(name)}</div>
          </div>
        </SelectItem>
      )
    );
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger className="w-[240px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent className="border-muted">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
}
