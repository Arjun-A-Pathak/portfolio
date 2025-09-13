import { Download, Github, Linkedin } from "lucide-react";
import Button from "./button";

const Nav = ({portfolio}) => {
  const items = [
    { href: "#start", label: "Start" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Connect" },
  ];
  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#start" className="font-bold tracking-tight text-xl">{portfolio.name}</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:opacity-80">{it.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-zinc-100">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-zinc-100">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={portfolio.socials.resume} target="_blank" rel="noreferrer" className="ml-1">
            <Button size="sm" className="rounded-2xl"> <Download className="w-4 h-4 mr-1" /> Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;