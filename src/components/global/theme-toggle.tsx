"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import availableThemeColors from "@/constants/themeColors.json";
import { useThemeContext } from "@/context/theme-data-provider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        font,
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
            <p style={{ fontFamily: font }} className="text-sm">
              {nameChange(name)}
            </p>
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
