/**
 * Editorial section heading for the project-page kit (design/components.md).
 * Renders a real <h2> (keeps the per-page heading outline from set 6) styled as
 * a mono, uppercase, muted label with a leading accent tick + index that read
 * the page's --accent. Visually: "— 01 / THE MISSION"; screen readers hear just
 * the heading text (the tick/index/slash are aria-hidden).
 *
 * inline-flex so it inherits the section's text-align (left for prose sections,
 * center for the hero-adjacent ones).
 */
const SectionLabel = ({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className="inline-flex items-center gap-3 text-xs sm:text-sm font-normal tracking-[0.25em] uppercase text-white/50">
      <span
        aria-hidden="true"
        className="inline-block h-px w-8 bg-[var(--accent)]"
      />
      <span aria-hidden="true" className="text-[var(--accent)]">
        {index}
      </span>
      <span aria-hidden="true">/</span>
      <span>{children}</span>
    </h2>
  );
};

export default SectionLabel;
