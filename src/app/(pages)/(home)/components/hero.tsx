import Image from "next/image";

import { Code } from "lucide-react";

export const Hero = () => {
  return (
    <section>
      <div className="bg-black min-h-80 w-full rounded-md p-8 relative bg-portrait shadow-lg text-white">
        <Image
          className="absolute bottom-0 right-4 lg:right-24 w-[390px] hidden md:block opacity-50 lg:opacity-100"
          src="/portrait1.png"
          alt="Leopold"
          width={1920}
          height={1920}
        />
        <div className="flex flex-col gap-4 z-10 relative">
          <h1 className="font-bold flex items-center gap-1">
            <Code className="size-5" />
            <span>About me</span>
          </h1>
          <h2 className="text-3xl font-bold max-w-[500px]">
            Hey there 👋, I'm <i>Leopold</i> and I'm a <i>software engineer</i>
          </h2>
          <p className="max-w-[600px] text-lg font-medium">
            Passionate software engineer with main focus being on Frontend
            development. I've contributed to various projects, collaborating
            with different teams to bring ideas to life in the best possible
            way.
          </p>
        </div>
        <div className="bg-primary/40 p-6 mt-16 max-w-[600px] rounded-xl flex flex-col gap-4 z-10 relative">
          <h2 className="text-xl font-bold">My mission</h2>
          <p className="font-medium text-lg">
            With my experience covering multiple technologies I keep focusing on
            creating modern, scalable and user-friendly web applications.
          </p>
          <i>Design like you'll maintain it. Because you will. 🚀</i>
        </div>
      </div>
    </section>
  );
};
