import { useState } from "react"
import { cn } from "../lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "./ui/tooltip"
  
export interface ItemType {
    itemName: string,
    alt: string,
    logo: any,
    tooltipContent: string,
    link?: string
}

interface HoverBlurCardsProps {
    items: ItemType[],
    imgType?: "img" | "icon",
    circled?: boolean
}

const HoverBlurCards = ({items, imgType = "img", circled = false}: HoverBlurCardsProps) => {
    const [hovered, setHovered] = useState<number|null>(null)

  return (
    <div className="flex justify-center flex-wrap gap-16 items-center px-10">
        {items.map((sponsor, ind) => {
            const Logo = sponsor.logo
            return (
                <TooltipProvider key={ind}>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className={cn(circled && "p-2 border rounded-full")}>
                                {sponsor.link ? <a
                                className={cn("drop p-2 transition-all duration-500", hovered !== null && hovered !== ind && "blur-sm", (ind === 4 || ind === 5) && "invert")}
                                onMouseEnter={()=>setHovered(ind)}
                                onMouseLeave={()=>setHovered(null)}
                                href={sponsor.link}
                                target="_blank"
                                >
                                    <img src={Logo} alt={sponsor.alt} className={cn("invert w-32", ind === 6 && "w-24", ind === 1 && "w-28")}/>
                                </a>
                                : <div
                                className={cn("drop p-2 transition-all duration-500", hovered !== null && hovered !== ind && "blur-sm")}
                                onMouseEnter={()=>setHovered(ind)}
                                onMouseLeave={()=>setHovered(null)}
                                >
                                    {imgType === "img" ? <img src={Logo} alt={sponsor.alt} className={cn("invert w-32", ind === 6 && "w-24", ind === 1 && "w-28")}/>
                                        : <Logo size="100"/>
                                    }
                                </div>
                                }
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p className="text-base">{sponsor.tooltipContent}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )
        })}
    </div>
  )
}
export default HoverBlurCards