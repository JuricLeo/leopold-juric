export const TechIcon = ({
  icon,
}: {
  icon: { hex: string; path: string; title: string };
}) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      fill={`#${icon.hex}`}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};
