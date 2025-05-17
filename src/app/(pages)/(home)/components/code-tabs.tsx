"use client";

import { useState } from "react";

import confetti from "canvas-confetti";
import codeExamples from "@/constants/code-block.json";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { TechIcon } from "@/components/global/tech-icon";

import { siJavascript, siTypescript, siPhp } from "simple-icons/icons";

export const CodeTabs = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleExecute = () => {
    setIsAnimating(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    });

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="mx-auto w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Who doesn&apos;t like confetti? <br /> Have some fun!
      </h2>
      <CodeBlock
        className={`transition-transform duration-300 ${
          isAnimating ? "scale-95" : "scale-100"
        }`}
        language="jsx"
        filename="DummyComponent.jsx"
        tabs={codeExamples.map((example) => ({
          name: (
            <div className="flex items-center gap-2">
              <TechIcon
                className="size-4"
                icon={
                  example.icon === "siJavascript"
                    ? siJavascript
                    : example.icon === "siTypescript"
                    ? siTypescript
                    : siPhp
                }
              />
              {example.name}
            </div>
          ),
          code: example.code,
          language: example.language,
        }))}
      />
      <Button className="flex justify-end ml-auto mt-2" onClick={handleExecute}>
        Execute
      </Button>
    </div>
  );
};
