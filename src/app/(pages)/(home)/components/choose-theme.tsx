"use client";

import { useThemeContext } from "@/context/theme-data-provider";
import availableThemeColors from "@/constants/theme-colors.json";

export const ChooseTheme = () => {
  const { setThemeColor } = useThemeContext();

  return (
    <section className="w-full max-w-[900px] mx-auto flex justify-center items-center flex-col">
      <h2 className="text-center text-2xl font-bold mb-6">Choose your theme</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {availableThemeColors.map((theme, index) => (
          <div
            onClick={() => setThemeColor(theme.name as ThemeColors)}
            key={theme.name}
            className={`w-full h-20 bg-primary/10 flex flex-col justify-center items-center cursor-pointer border rounded-md hover:bg-primary/20 hover:-translate-y-1 hover:shadow-md transition-all duration-200 ${
              index === 0 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <p style={{ fontFamily: theme.font }}>{theme.name}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
};
