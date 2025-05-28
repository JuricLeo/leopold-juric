"use client";

import useLangStore from "@/store/useLangStore";

import { Separator } from "@/components/ui/separator";

export const MyWorkTitle = () => {
  const { t } = useLangStore();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-center mt-12">{t("myWork")}</h1>
      <Separator
        orientation="vertical"
        className="mx-auto py-4 px-0.5 rounded-xl bg-primary"
      />
      <p className="text-center text-lg">{t("hereYouCanCheckOut")}</p>
    </section>
  );
};
