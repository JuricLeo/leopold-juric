import { Separator } from "@/components/ui/separator";
import { Projects } from "@/app/(pages)/(home)/components/projects";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center mt-12">My work</h1>
        <Separator
          orientation="vertical"
          className="mx-auto py-4 px-0.5 rounded-xl bg-primary"
        />
        <p className="text-center text-lg">
          Here you can check out almost all of the projects that I have worked
          on.
        </p>
      </div>
      <Projects />
    </div>
  );
}
