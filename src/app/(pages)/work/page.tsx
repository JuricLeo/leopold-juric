"use client";

import useLangStore from "@/store/useLangStore";

import { Projects } from "@/app/(pages)/(home)/components/projects";
import { Separator } from "@/components/ui/separator";
import { Design } from "./components/design";

export default function WorkPage() {
  const { t } = useLangStore();
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center mt-12">{t("myWork")}</h1>
        <Separator
          orientation="vertical"
          className="mx-auto py-4 px-0.5 rounded-xl bg-primary"
        />
        <p className="text-center text-lg">{t("hereYouCanCheckOut")}</p>
      </div>
      <Projects />
      <Design />
    </div>
  );
}
