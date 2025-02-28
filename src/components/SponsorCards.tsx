import AnsysLogo from "/ansys-logo.png"
import NasaLogo from "/nasa-logo.png"
import EGCLogo from "/egc-logo-w-trans.png"
import RutgersLogo from "/rutgers-logo.png"
import SedsLogo from "/seds-logo.png"
import UNPLogo from "/unp-logo.png"
import DassaultLogo from "/dassault-systemes-logo.png"
import { useState } from "react"
import { cn } from "../lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "./ui/tooltip" 

  const sponsors = [
    {
        sponsorName: "Ansys",
        alt: "Ansys Logo",
        logo: AnsysLogo,
        tooltipContent: "The creators of STK software",
        link: "https://www.ansys.com/"
    },
    {
        sponsorName: "Rutgers Engineering Governing Council",
        alt: "Rutgers EGC Logo",
        logo: EGCLogo,
        tooltipContent: "The student ran governing council of The Rutgers School of Engineering",
        link: "https://egc.rutgers.edu/"
    },
    {
        sponsorName: "NASA",
        alt: "NASA Logo",
        logo: NasaLogo,
        tooltipContent: "We all know Nasa",
        link: "https://www.nasa.gov/"
    },
    {
        sponsorName: "Rutgers University",
        alt: "Rutgers University Logo",
        logo: RutgersLogo,
        tooltipContent: "The State University of New Jersey",
        link: "https://www.rutgers.edu/"
    },
    {
        sponsorName: "Students for the Exploration and Development of Space",
        alt: "SEDS Logo",
        logo: SedsLogo,
        tooltipContent: "A student-run organization empowering the next generation of space explorers through projects, education, and advocacy.",
        link: "https://seds.org/space-for-all/"
    },
    {
        sponsorName: "University Nanosatellite Program",
        alt: "UNP Logo",
        logo: UNPLogo,
        tooltipContent: `A competitive U.S. Air Force and Space Force program supporting student teams in designing and building small satellites for space missions.`,
        link: "https://universitynanosat.org/"
    },
    {
        sponsorName: "Dassault Systèmes",
        alt: "Dassault Systèmes Logo",
        logo: DassaultLogo,
        tooltipContent: "The creators of SOLIDWORKS CAD software",
        link: "https://www.3ds.com/"
    },
]

const SponsorCards = () => {
    const [hovered, setHovered] = useState<number|null>(null)

  return (
    <div className="flex justify-center flex-wrap gap-16 items-center px-10">
        {sponsors.map((sponsor, ind) => {
            console.log(sponsor.sponsorName)
            return (
                <TooltipProvider key={ind}>
                    <Tooltip>
                        <TooltipTrigger>
                            <a
                            className={cn("drop p-2 transition-all", hovered !== null && hovered !== ind && "blur-sm", (ind === 4 || ind === 5) && "invert")}
                            onMouseEnter={()=>setHovered(ind)}
                            onMouseLeave={()=>setHovered(null)}
                            href={sponsor.link}
                            target="_blank"
                            >
                                <img src={sponsor.logo} alt={sponsor.alt} className={cn("invert w-32", ind === 6 && "w-24", ind === 1 && "w-28")}/>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>{sponsor.tooltipContent}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )
        })}
    </div>
  )
}
export default SponsorCards