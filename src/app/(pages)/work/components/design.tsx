"use client";

import useLangStore from "@/store/useLangStore";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/design/design1.webp",
  "/design/design2.webp",
  "/design/design3.webp",
  "/design/design4.webp",
  "/design/design5.webp",
  "/design/design6.webp",
  "/design/design7.webp",
  "/design/design8.webp",
  "/design/design9.webp",
  "/design/design10.webp",
  "/design/design11.webp",
  "/design/design12.webp",
  "/design/design13.webp",
  "/design/design14.webp",
  "/design/design15.webp",
  "/design/design16.webp",
  "/design/design17.webp",
  "/design/design18.webp",
  "/design/design19.webp",
];

export const Design = () => {
  const { t } = useLangStore();
  return (
    <section>
      <h2 className="text-center text-2xl font-bold mb-16 mt-20">
        {t("designTitle")}
      </h2>
      <ParallaxScroll images={images} />
    </section>
  );
};
