import { ModeToggle } from "@/components/global/mode-toggle";
import { ThemeToggle } from "@/components/global/theme-toggle";

export default function Home() {
  return (
    <main>
      hello
      <ModeToggle />
      <ThemeToggle />
      <div className="flex flex-col gap-4 w-full mx-auto justify-center items-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-lg">This is a test</p>
      </div>
    </main>
  );
}
