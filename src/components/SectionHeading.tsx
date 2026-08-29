import { cn } from "../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <header
    className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-red-300">
      <span className="h-px w-8 bg-red-300" aria-hidden="true" />
      {eyebrow}
    </p>
    <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
        {description}
      </p>
    )}
  </header>
);

export default SectionHeading;
