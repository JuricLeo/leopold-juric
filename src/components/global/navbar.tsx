"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import useLangStore from "@/store/useLangStore";

import { ChooseTheme } from "@/app/(pages)/(home)/components/choose-theme";
import ChangeLanguage from "./change-lang";
import { ModeToggle } from "./mode-toggle";
import { ThemeToggle } from "./theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useLangStore();

  const routes = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("myWork"),
      href: "/work",
    },
    {
      label: t("blog"),
      href: "/blog",
    },
  ];

  return (
    <nav className="sticky top-0 flex justify-between items-center py-8 z-20 backdrop-blur-sm bg-background/50 px-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl">
          LJ
        </Link>
        <div className="gap-4 hidden md:flex">
          {routes.map((route) => (
            <Link
              className={cn(
                "px-4 py-2 rounded-md",
                pathname === route.href && "bg-muted"
              )}
              key={route.href}
              href={route.href}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger aria-label="menu" name="menu" className="md:hidden">
          <Menu name="hamburger-menu" className="cursor-pointer size-7" />
        </SheetTrigger>
        <SheetContent side="top" className="bg-secondary min-h-screen">
          <SheetHeader>
            <SheetTitle className="hidden"></SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>
          <div className="gap-8 flex flex-col mx-6 h-[calc(100vh-4rem)]">
            {routes.map((route) => (
              <Link
                className={cn(
                  "rounded-md w-fit px-4 py-2 text-2xl text-primary/50 font-bold hover:underline",
                  pathname === route.href && "text-primary bg-primary/10"
                )}
                onClick={() => setIsOpen(false)}
                key={route.href}
                href={route.href}
              >
                {route.label}
              </Link>
            ))}
            <div className="mt-auto mb-12 flex flex-col mx-auto justify-center">
              <div className="flex">
                <ThemeToggle />
                <ModeToggle />
              </div>
              <ChangeLanguage />
              <div className="flex mx-auto gap-4 mt-4">
                <a
                  href="https://github.com/JuricLeo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/leopold-jurić"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex items-center gap-1">
        <ChooseTheme />
        <ModeToggle />
        <ChangeLanguage />
      </div>
    </nav>
  );
};
