import { useState, type ComponentType } from "react";
import { cn } from "../lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface ItemType {
  itemName: string;
  alt: string;
  logo: string | ComponentType<{ size?: string | number }>;
  tooltipContent: string;
  relationship?: string;
  invertLogo?: boolean;
  link?: string;
}

interface HoverBlurCardsProps {
  items: ItemType[];
  imgType?: "img" | "icon";
  circled?: boolean;
}

const HoverBlurCards = ({
  items,
  imgType = "img",
  circled = false,
}: HoverBlurCardsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const itemClassName = (index: number) =>
    cn(
      "drop inline-flex min-h-11 min-w-11 items-center justify-center p-2 transition-all duration-500",
      circled && "rounded-full border",
      hovered !== null && hovered !== index && "blur-sm",
      "w-full",
    );

  const logo = (item: ItemType, index: number) => {
    if (imgType === "icon" && typeof item.logo !== "string") {
      const Logo = item.logo;
      return <Logo size={100} />;
    }

    return (
      <img
        src={item.logo as string}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "max-h-20 w-32 object-contain",
          item.invertLogo !== false && "invert",
          index === 6 && "w-24",
          index === 1 && "w-28",
        )}
      />
    );
  };

  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
        {items.map((item, index) => (
          <Tooltip key={item.itemName}>
            <TooltipTrigger asChild>
              {item.link ? (
                <a
                  className={itemClassName(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.itemName} website`}
                >
                  <span className="flex flex-col items-center gap-3">
                    {logo(item, index)}
                    {item.relationship && (
                      <span className="text-center text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/45">
                        {item.relationship}
                      </span>
                    )}
                  </span>
                </a>
              ) : (
                <button
                  type="button"
                  className={itemClassName(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={item.itemName}
                >
                  <span className="flex flex-col items-center gap-3">
                    {logo(item, index)}
                    {item.relationship && (
                      <span className="text-center text-[0.55rem] font-bold uppercase tracking-[0.18em] text-white/45">
                        {item.relationship}
                      </span>
                    )}
                  </span>
                </button>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base">{item.tooltipContent}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default HoverBlurCards;
