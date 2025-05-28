"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import useLangStore from "@/store/useLangStore";

import Typewriter from "typewriter-effect";
import CountUp from "react-countup";

import { Code, FolderCode, GitGraph, GitMerge } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const { t } = useLangStore();

  return (
    <section>
      <div className="min-h-80 w-full rounded-md p-8 relative shadow-lg text-white overflow-hidden">
        <Image
          src="/portrait-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center absolute md:hidden inset-0 z-0 opacity-50"
          aria-hidden="true"
        />
        <Image
          priority
          className="absolute bottom-0 right-4 lg:right-24 w-[390px] hidden md:block opacity-50 lg:opacity-100 z-10"
          src="/portrait.png"
          alt="Leopold"
          width={390}
          height={518}
        />
        <div className="flex flex-col gap-4 z-10 relative">
          <h1 className="font-bold flex items-center gap-2">
            <Code className="size-5" />
            <span>{t("aboutMe")}</span>
          </h1>
          <h2 className="text-3xl font-bold max-w-[500px]">
            {t("heyThere")} 👋, {t("Iam")} Leopold {t("andIam")}
            <Typewriter
              options={{
                strings: [
                  t("softwareEngineer"),
                  t("frontendDeveloper"),
                  t("fullStackDeveloper"),
                ],
                autoStart: true,
                loop: true,
              }}
            />
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
      <div
        ref={ref}
        className="flex flex-col md:flex-row gap-2 md:gap-0 items-left md:items-center md:justify-between mt-2"
      >
        <div className="flex gap-2 items-center opacity-75 text-sm">
          <GitMerge size={16} />
          {t("mergedPRs")}:
          {isVisible && (
            <>
              <CountUp duration={3.5} end={600} />
              <span className="-ml-1">+</span>
            </>
          )}
        </div>
        <div className="flex gap-2 items-center opacity-75 text-sm">
          <GitGraph size={16} />
          {t("contributionsLastYear")}:
          {isVisible && (
            <>
              <CountUp duration={3.5} end={2420} />
              <span className="-ml-1">+</span>
            </>
          )}
        </div>
        <div className="flex gap-2 items-center opacity-75 text-sm">
          <FolderCode size={16} />
          {t("projectsTitle")}:
          {isVisible && (
            <>
              <CountUp duration={3.5} end={25} />
              <span className="-ml-1">+</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
