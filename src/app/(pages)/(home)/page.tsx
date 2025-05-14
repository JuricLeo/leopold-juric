import { Hero } from "./components/hero";
import { ChooseTheme } from "./components/choose-theme";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <ChooseTheme />
    </div>
  );
}
