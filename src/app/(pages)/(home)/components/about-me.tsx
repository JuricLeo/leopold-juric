"use client";

import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { ChevronRight, Mail } from "lucide-react";
export const AboutMe = () => {
  const year = new Date().getFullYear() - 2021;
  return (
    <section className="flex-1 flex flex-col gap-4 md:my-8">
      <h2 className="text-2xl font-bold underline">About me</h2>
      <p className="text-lg">
        I've been coding for over {year} years, starting my journey in 2021.
        After getting the hang of HTML, CSS and JavaScript I started
        freelancing, creating websites for local businesses.
      </p>
      <p className="text-lg">
        Later on I started using frameworks like React, Next.js and Laravel. I
        recreated popular SaaS applications like: Airbnb, LMS, Discord, etc. and
        even created some small applications myself.
      </p>
      <p className="text-lg">
        So far I've worked accross multiple projects with multiple teams using
        different technologies and tools. I'm always looking for new challenges
        so I can contribute with my experience and skills.
      </p>
      <div className="flex flex-wrap gap-4 mt-2">
        <Button asChild className="w-fit">
          <a
            rel="noopener noreferrer"
            href="https://github.com/juricleo"
            target="_blank"
          >
            <SiGithub /> View my Github <ChevronRight />
          </a>
        </Button>
        <Button variant="outline" asChild className="w-fit">
          <a rel="noopener noreferrer" href="mailto:ljurickc@gmail.com">
            <Mail /> Contact me <ChevronRight />
          </a>
        </Button>
      </div>
    </section>
  );
};
