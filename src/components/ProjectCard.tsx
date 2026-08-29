import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { ProjectStat } from "./project/projectConfig";
import { GlowingEffect } from "./ui/glowing-effect";

interface ProjectCardProps {
  icon: string;
  index: string;
  title: string;
  purpose: string;
  facts: ProjectStat[];
  accent: string;
  href: string;
}

const ProjectCard = ({
  icon,
  index,
  title,
  purpose,
  facts,
  accent,
  href,
}: ProjectCardProps) => (
  <Link
    to={href}
    className="group/card block h-[22rem] w-full md:h-[25rem]"
    style={{ "--card-accent": accent } as CSSProperties}
  >
    <article className="relative flex h-full flex-col overflow-hidden border border-white/15 bg-black transition-colors group-hover/card:border-white/35 group-focus-visible/card:border-white">
      <GlowingEffect
        disabled={false}
        proximity={110}
        spread={35}
        borderWidth={1}
        className="rounded-none"
      />
      <div className="relative flex h-[45%] items-center justify-center border-b border-white/10 bg-white/[0.018]">
        <span className="absolute left-5 top-5 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[var(--card-accent)]">
          Project {index}
        </span>
        <img
          src={icon}
          alt=""
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
          className="h-20 w-20 invert opacity-85 transition-transform duration-500 group-hover/card:scale-110 md:h-24 md:w-24"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/55">{purpose}</p>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-4">
          <ul className="flex gap-5">
            {facts.slice(0, 2).map((fact) => (
              <li key={fact.label}>
                <span className="block text-xs font-bold text-white">{fact.value}</span>
                <span className="mt-1 block text-[0.52rem] uppercase tracking-wider text-white/35">
                  {fact.label}
                </span>
              </li>
            ))}
          </ul>
          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold">
            Mission brief
            <ArrowUpRight className="h-4 w-4 text-[var(--card-accent)]" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  </Link>
);

export default ProjectCard;
