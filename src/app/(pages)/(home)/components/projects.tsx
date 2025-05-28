"use client";

import Image from "next/image";
import Link from "next/link";

import projects from "@/constants/projects.json";
import { getIconByName } from "@/lib/stack";
import useLangStore from "@/store/useLangStore";

import { Button } from "@/components/ui/button";
import { StackItem } from "@/components/global/stack-item";

import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
interface ProjectProps {
  recent?: boolean;
}

export const Projects = ({ recent = false }: ProjectProps) => {
  const { t } = useLangStore();

  const wantedProjcets = [
    "Satnica",
    "PentestPad",
    "Pinky CyberSafe",
    "Financial Focus",
    "CCChelp",
    "Pets of TVZ",
  ];

  const displayedProjects = recent
    ? projects
        .filter((project) => wantedProjcets.includes(project.name))
        .sort(
          (a, b) =>
            wantedProjcets.indexOf(a.name) - wantedProjcets.indexOf(b.name)
        )
    : projects;

  return (
    <section>
      {recent && (
        <h2 className="text-4xl font-bold mb-6">{t("recentProjects")}</h2>
      )}
      <div className="flex flex-col gap-20">
        {displayedProjects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center gap-2">
              {project.link ? (
                <a
                  aria-label={project.name}
                  className="hover:opacity-80 inline-flex"
                  href={project.link}
                  target="_blank"
                >
                  <h3 className="border-b border-primary text-2xl font-bold text-primary flex">
                    <span>{project.name}</span>
                    <ExternalLinkIcon className="size-4 ml-1.5 mt-1" />
                  </h3>
                </a>
              ) : (
                <div className="inline-flex">
                  <h3 className="text-2xl font-bold text-primary flex">
                    <span>{project.name}</span>
                    <ExternalLinkIcon className="size-4 ml-1.5 mt-1" />
                  </h3>
                </div>
              )}
              <p className="opacity-80 text-sm mt-1">
                &#40;{project.date}&#41;
              </p>
            </div>
            {project.status && (
              <p className="opacity-80 mt-2 text-sm text-destructive -mb-2">
                Status: {t(`projects.${project.name}.status`)}
              </p>
            )}
            <p className="opacity-60 mt-2 text-sm">
              {t("type")}: {t(`projects.${project.name}.type`)}
            </p>
            <p className="text-base opacity-80 max-w-[800px] mt-2 mb-6">
              {t(`projects.${project.name}.description`)}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.stack.map((item) => (
                <StackItem
                  isProject={true}
                  key={item}
                  icon={getIconByName(item)}
                />
              ))}
            </div>
            <Image
              className="rounded-lg border"
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
            {t("andMore")}
          </h3>
          <Button
            name="viewAllProjects"
            size="lg"
            asChild
            className="w-fit mx-auto"
          >
            <Link aria-label={t("viewAllProjects")} href="/work">
              <span className="text-lg font-bold">{t("viewAllProjects")}</span>
              <ChevronRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};
