import { TextHoverEffect } from "./ui/text-hover-effect";

const HomeSectionTitle = ({
  title,
  display = title,
  description,
}: {
  title: string;
  display?: string;
  description?: string;
}) => (
  <header>
    <h2 className="sr-only">{title}</h2>
    <div className="h-24 sm:h-32" aria-hidden="true">
      <TextHoverEffect text={display} />
    </div>
    {description && (
      <p className="mx-auto -mt-2 max-w-2xl px-5 text-center text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
        {description}
      </p>
    )}
  </header>
);

export default HomeSectionTitle;
