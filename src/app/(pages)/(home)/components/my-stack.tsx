import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siTailwindcss,
  siReact,
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siGit,
  siGithub,
  siFigma,
  siPostgresql,
  siMysql,
  siMongodb,
  siXml,
  siBun,
  siAffinitydesigner,
  siAffinityphoto,
  siCinema4d,
  siDocker,
  siNpm,
  siVercel,
  siAmazons3,
  siRedis,
} from "simple-icons/icons";
import { TechIcon } from "@/components/global/tech-icon";

const stack = [
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siTailwindcss,
  siReact,
  siNextdotjs,
  siLaravel,
  siNodedotjs,
  siPhp,
  siGit,
  siGithub,
  siFigma,
  siPostgresql,
  siMysql,
  siMongodb,
  siXml,
  siBun,
  siAffinitydesigner,
  siAffinityphoto,
  siCinema4d,
  siDocker,
  siNpm,
  siVercel,
  siAmazons3,
  siRedis,
];

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
  PHP: "https://www.php.net/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Figma: "https://www.figma.com/",
  PostgreSQL: "https://www.postgresql.org/",
  MySQL: "https://www.mysql.com/",
  MongoDB: "https://www.mongodb.com/",
  XML: "https://developer.mozilla.org/en-US/docs/Web/XML",
  Bun: "https://bun.sh/",
  "Affinity Designer": "https://affinity.serif.com/designer/",
  "Affinity Photo": "https://affinity.serif.com/photo/",
  "Cinema 4D": "https://www.maxon.net/cinema-4d",
  Docker: "https://www.docker.com/",
  npm: "https://www.npmjs.com/",
  Vercel: "https://vercel.com/",
  "Amazon S3": "https://aws.amazon.com/s3/",
  Redis: "https://redis.io/",
};

export const MyStack = () => {
  return (
    <section className="flex-1">
      <div className="bg-sidebar border rounded-xl w-full h-full p-8">
        <h2 className="text-2xl font-bold">My stack</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
          {stack.map((icon) => (
            <a
              href={
                techUrls[icon.title] ||
                `https://www.google.com/search?q=${icon.title}`
              }
              target="_blank"
              rel="noopener noreferrer"
              key={icon.title}
              className="flex items-center gap-2 bg-background border px-3 py-2 rounded-md hover:bg-accent transition hover:-translate-y-1 duration-200"
            >
              <TechIcon icon={icon} />
              <span className="text-sm whitespace-nowrap">{icon.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
