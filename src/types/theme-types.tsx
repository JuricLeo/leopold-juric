type ThemeColors =
  | "Perpetuity"
  | "VintagePaper"
  | "Notebook"
  | "NeoBrutalism"
  | "KodamaGrove"
  | "Doom64"
  | "Cyberpunk"
  | "Caffeine";

interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
