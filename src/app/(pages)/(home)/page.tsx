import { ThemeToggle } from "@/components/global/theme-toggle";
import { Hero } from "./components/hero";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <ThemeToggle />
    </div>
  );
}
