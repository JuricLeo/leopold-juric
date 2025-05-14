import { SiGithub, SiLinkedin } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/JuricLeo",
    icon: <SiGithub size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leopold-jurić/",
    icon: <SiLinkedin size={24} />,
  },
];

export const Footer = () => {
  return (
    <footer className="py-6 mt-20 border-t flex justify-between items-center">
      <p>Leopold Jurić</p>
      <div className="flex gap-2">
        {socials.map((social) => (
          <a href={social.url} key={social.name} target="_blank">
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
