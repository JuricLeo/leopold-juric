"use client";

import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { ChevronRight, Mail } from "lucide-react";
import useLangStore from "@/store/useLangStore";

export const AboutMe = () => {
  const { t } = useLangStore();

  const year = new Date().getFullYear() - 2021;

  return (
    <section className="flex-1 flex flex-col gap-4 md:my-8">
      <h2 className="text-2xl font-bold underline">{t("aboutMe")}</h2>
      <p className="text-lg">{t("aboutDescription1")}</p>
      <p className="text-lg">{t("aboutDescription2")}</p>
      <p className="text-lg">{t("aboutDescription3")}</p>
      <div className="flex flex-wrap gap-4 mt-2">
        <Button asChild className="w-fit">
          <a
            rel="noopener noreferrer"
            href="https://github.com/juricleo"
            target="_blank"
          >
            <SiGithub /> {t("viewMyGitHub")} <ChevronRight />
          </a>
        </Button>
        <Button variant="outline" asChild className="w-fit">
          <a rel="noopener noreferrer" href="mailto:ljurickc@gmail.com">
            <Mail /> {t("contactMe")} <ChevronRight />
          </a>
        </Button>
      </div>
    </section>
  );
};
