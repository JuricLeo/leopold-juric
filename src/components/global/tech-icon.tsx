import { cn } from "@/lib/utils";

export const TechIcon = ({
  icon,
  className,
}: {
  icon: { hex: string; path: string; title: string };
  className?: string;
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
      fill={`#${icon.hex}`}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};
