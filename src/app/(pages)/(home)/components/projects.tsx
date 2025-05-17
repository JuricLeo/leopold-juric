import Image from "next/image";
import Link from "next/link";

import projects from "@/constants/projects.json";
import { getIconByName } from "@/lib/stack";

import { Button } from "@/components/ui/button";
import { StackItem } from "@/components/global/stack-item";

import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";

interface ProjectProps {
  recent?: boolean;
}

export const Projects = ({ recent = false }: ProjectProps) => {
  function linkText(type: string) {
    if (type === "Clone") {
      return "View official website";
    } else if (type === "Personal") {
      return "Visit website";
    } else {
      return "View project";
    }
  }

  const displayedProjects = recent ? projects.slice(0, 3) : projects;

  return (
    <section>
      {recent && <h2 className="text-4xl font-bold mb-6">Recent Projects</h2>}
      <div className="flex flex-col gap-20">
        {displayedProjects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center gap-2">
              {project.link ? (
                <a
                  className="underline hover:opacity-80 inline-flex"
                  href={project.link}
                  target="_blank"
                >
                  <h6 className="text-2xl font-bold text-primary flex">
                    <span>{project.name}</span>
                    <ExternalLinkIcon className="size-4 ml-1.5 mt-1" />
                  </h6>
                </a>
              ) : (
                <div className="inline-flex">
                  <h6 className="text-2xl font-bold text-primary flex">
                    <span>{project.name}</span>
                    <ExternalLinkIcon className="size-4 ml-1.5 mt-1" />
                  </h6>
                </div>
              )}
              <p className="opacity-80 text-sm mt-1">
                &#40;{project.date}&#41;
              </p>
            </div>
            {project.status && (
              <p className="opacity-80 mt-2 text-sm text-destructive -mb-2">
                Status: {project.status}
              </p>
            )}
            <p className="opacity-60 mt-2 text-sm">Type: {project.type}</p>
            <p className="text-base opacity-80 max-w-[800px] mt-2 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.stack.map((item) => (
                <StackItem isProject={true} key={item} icon={getIconByName(item)} />
              ))}
            </div>
            <Image
              className="rounded-lg"
              src={`/projects/${project.name}.webp`}
              alt={project.name}
              width={1685}
              height={910}
            />
          </div>
        ))}
      </div>
      {recent && (
        <div className="flex flex-col gap-4 mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center max-w-[660px] mx-auto">
            And there&apos;s much more! You can view the rest of the projects
            that I&apos;ve worked on here:
          </h3>
          <Button size="lg" asChild className="w-fit mx-auto">
            <Link href="/work">
              <span className="text-lg font-bold">View all projects</span>
              <ChevronRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};
