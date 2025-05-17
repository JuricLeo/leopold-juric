import { cn } from "@/lib/utils";
import { TechIcon } from "./tech-icon";

const techUrls: Record<string, string> = {
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  "Tailwind CSS": "https://tailwindcss.com/",
  React: "https://reactjs.org/",
  "Next.js": "https://nextjs.org/",
  Laravel: "https://laravel.com/",
  "Node.js": "https://nodejs.org/",
  Livewire: "https://laravel-livewire.com/",
  PHP: "https://www.php.net/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Figma: "https://www.figma.com/",
  PostgreSQL: "https://www.postgresql.org/",
  MySQL: "https://www.mysql.com/",
  MongoDB: "https://www.mongodb.com/",
  XML: "https://developer.mozilla.org/en-US/docs/Web/XML",
  Bun: "https://bun.sh/",
  Stripe: "https://stripe.com/",
  "Affinity Designer": "https://affinity.serif.com/designer/",
  "Affinity Photo": "https://affinity.serif.com/photo/",
  "Cinema 4D": "https://www.maxon.net/cinema-4d",
  Docker: "https://www.docker.com/",
  npm: "https://www.npmjs.com/",
  Vercel: "https://vercel.com/",
  "Amazon S3": "https://aws.amazon.com/s3/",
  Redis: "https://redis.io/",
  Inertia: "https://inertiajs.com/",
  Clerk: "https://clerk.com/",
  Prisma: "https://www.prisma.io/",
  Supabase: "https://supabase.com/",
};

export const StackItem = ({
  icon,
  isProject = false,
}: {
  icon: { title: string; hex: string; path: string };
  isProject?: boolean;
}) => {
  return (
    <a
      href={
        techUrls[icon.title] || `https://www.google.com/search?q=${icon.title}`
      }
      target="_blank"
      rel="noopener noreferrer"
      key={icon.title}
      className={cn("flex items-center w-fit gap-2 border px-3 py-2 rounded-md hover:bg-accent transition hover:-translate-y-1 duration-200", isProject ? "bg-sidebar" : "bg-background")}
    >
      <TechIcon icon={icon} />
      <span className="text-sm whitespace-nowrap">{icon.title}</span>
    </a>
  );
};
