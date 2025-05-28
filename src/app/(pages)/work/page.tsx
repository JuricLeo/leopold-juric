import { Projects } from "@/app/(pages)/(home)/components/projects";
import { Design } from "./components/design";
import { Metadata } from "next";
import { MyWorkTitle } from "./components/my-work-title";

export const metadata: Metadata = {
  title: "My Work",
  description: "Leopold Jurić's work, projects, designs and experiences.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-24">
      <MyWorkTitle />
      <Projects />
      <Design />
    </div>
  );
}
