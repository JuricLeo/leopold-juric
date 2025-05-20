import { Hero } from "./components/hero";
import { AboutMe } from "./components/about-me";
import { MyStack } from "./components/my-stack";
import { Projects } from "./components/projects";
import { homePageStackIcons } from "@/lib/stack";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-24">
        <AboutMe />
        <MyStack stack={homePageStackIcons} />
      </div>
      <Projects recent />
    </div>
  );
}
