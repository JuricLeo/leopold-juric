type ThemeColors =
  | "Perpetuity"
  | "VintagePaper"
  | "Notebook"
  | "NeoBrutalism"
  | "KodamaGrove"
  | "Doom64"
  | "Cyberpunk"
  | "Caffeine";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
