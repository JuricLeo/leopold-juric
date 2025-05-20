"use client";

import useLangStore from "@/store/useLangStore";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MailIcon } from "lucide-react";

export const ContactMe = () => {
  const { t } = useLangStore();

  return (
    <section className="w-full max-w-[900px] mx-auto flex flex-col gap-4 bg-card p-6 rounded-md haikei text-white">
        <h2 className="">{t("contactMe")}</h2>
        <p className="max-w-[600px]">{t("contactMeDescription")}</p>
        <Button className="w-fit mt-2" asChild>
          <a
            href="mailto:ljurickc@gmail.com"
            className="flex items-center gap-2"
          >
            <MailIcon />
            {t("contactMe")}
            <ChevronRightIcon />
          </a>
        </Button>
    </section>
  );
};
