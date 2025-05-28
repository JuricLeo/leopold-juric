import "./globals.css";

import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Merriweather,
  DM_Sans,
  Outfit,
  Oxanium,
  Architects_Daughter,
  Source_Serif_4,
  Libre_Baskerville,
  Lora,
  IBM_Plex_Mono,
  Fira_Code,
  Space_Mono,
} from "next/font/google";

import { ThemeProvider } from "@/components/global/theme-provider";
import ThemeDataProvider from "@/context/theme-data-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const fontVariables = [
  jetbrainsMono.variable,
  merriweather.variable,
  dmSans.variable,
  outfit.variable,
  oxanium.variable,
  architectsDaughter.variable,
  sourceSerif.variable,
  libreBaskerville.variable,
  lora.variable,
  ibmPlexMono.variable,
  firaCode.variable,
  spaceMono.variable,
].join(" ");

export const metadata: Metadata = {
  title: {
    template: "%s | Leopold Jurić",
    default: "Leopold Jurić",
  },
  description:
    "Portfolio of Leopold Jurić, a fullstack web developer specializing in Laravel and Next.js. View projects, skills, and contact details.",
  keywords: [
    "Web Developer",
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Freelance Developer",
    "Leopold Jurić",
  ],
  creator: "Leopold Jurić",
  authors: [{ name: "Leopold Jurić", url: "https://leopold-juric.com" }],
  openGraph: {
    title: "Leopold Jurić",
    description:
      "Portfolio of Leopold Jurić, a fullstack web developer specializing in Laravel and Next.js. View projects, skills, and contact details.",
    url: "https://leopold-juric.com",
    siteName: "Leopold Jurić",
    images: [
      {
        url: "https://leopold-juric.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leopold Jurić",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://leopold-juric.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>{children}</ThemeDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
