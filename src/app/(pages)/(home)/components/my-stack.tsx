"use client";

import useLangStore from "@/store/useLangStore";
import { StackItem } from "@/components/global/stack-item";
interface MyStackProps {
  stack: Array<{ title: string; hex: string; path: string }>;
}

export const MyStack = ({ stack }: MyStackProps) => {
  const { t } = useLangStore();

  return (
    <section className="flex-1">
      <div className="bg-sidebar border rounded-xl w-full h-full p-8">
        <h2 className="text-2xl font-bold">{t("myStack")}</h2>
        <div className="flex flex-wrap gap-x-3 md:gap-y-3 gap-y-2 mt-4">
          {stack.map((item) => (
            <StackItem key={item.title} icon={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
