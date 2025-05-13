"use client";

import Image from "next/image";

import { Code } from "lucide-react";

import useLangStore from "@/store/useLangStore";

export const Hero = () => {
  const { t } = useLangStore();

  return (
    <section>
      <div className="min-h-80 w-full rounded-md p-8 relative bg-portrait shadow-lg text-white">
        <Image
          className="absolute bottom-0 right-4 lg:right-24 w-[390px] hidden md:block opacity-50 lg:opacity-100"
          src="/portrait.png"
          alt="Leopold"
          width={390}
          height={400}
        />
        <div className="flex flex-col gap-4 z-10 relative">
          <h1 className="font-bold flex items-center gap-2">
            <Code className="size-5" />
            <span>{t("aboutMe")}</span>
          </h1>
          <h2 className="text-3xl font-bold max-w-[500px]">
            {t("heyThere")} 👋, {t("Iam")} <i>Leopold</i> {t("andIam")}{" "}
            <i>software engineer</i>
          </h2>
          <p className="max-w-[600px] text-lg font-medium">
            {t("aboutMeDescription")}
          </p>
        </div>
        <div className="bg-primary/40 p-6 mt-16 max-w-[600px] rounded-xl flex flex-col gap-4 z-10 relative">
          <h2 className="text-2xl font-bold">{t("myMission")}</h2>
          <p className="font-medium text-lg">{t("myMissionDescription")}</p>
          <i>{t("missionQuote")}</i>
        </div>
      </div>
    </section>
  );
};
