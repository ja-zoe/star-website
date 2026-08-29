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
      (index === 4 || index === 5) && "invert",
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
          "w-32 invert",
          index === 6 && "w-24",
          index === 1 && "w-28",
        )}
      />
    );
  };

  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center justify-center gap-10 px-5 md:gap-16 md:px-10">
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
                  {logo(item, index)}
                </a>
              ) : (
                <button
                  type="button"
                  className={itemClassName(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={item.itemName}
                >
                  {logo(item, index)}
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
