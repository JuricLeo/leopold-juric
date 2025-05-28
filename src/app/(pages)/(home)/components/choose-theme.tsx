"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useThemeContext } from "@/context/theme-data-provider";
import availableThemeColors from "@/constants/theme-colors.json";

import { Button } from "@/components/ui/button";

import { PaletteIcon } from "lucide-react";

export const ChooseTheme = () => {
  const { setThemeColor } = useThemeContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="theme" name="theme" variant="ghost">
          <PaletteIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose your style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {availableThemeColors.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => setThemeColor(theme.name as ThemeColors)}
          >
            <div className="flex gap-2">
              <div
                style={{ backgroundColor: theme.primary }}
                className="w-4 h-4 rounded-full"
              ></div>
              <div
                style={{ backgroundColor: theme.secondary }}
                className="w-4 h-4 rounded-full"
              ></div>
              <div
                style={{ backgroundColor: theme.accent }}
                className="w-4 h-4 rounded-full"
              ></div>
            </div>
            <span>{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
