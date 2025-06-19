import { ShootingStars } from "../ui/shooting-stars";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Globe } from "../magicui/globe"
import StarStat from "../StarStat";
import { Wrench, UsersRound, BookCopy } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import AnsysLogo from "/ansys-logo.png"
import NasaLogo from "/nasa-logo.png"
import EGCLogo from "/egc-logo-w-trans.png"
import RutgersLogo from "/rutgers-logo.png"
import SedsLogo from "/seds-logo.png"
import UNPLogo from "/unp-logo.png"
import DassaultLogo from "/dassault-systemes-logo.png"
import HoverBlurCards from "../HoverBlurCards";

const sponsors = [
    {
        itemName: "Ansys",
        alt: "Ansys Logo",
        logo: AnsysLogo,
        tooltipContent: "The creators of STK software",
        link: "https://www.ansys.com/"
    },
    {
        itemName: "Rutgers Engineering Governing Council",
        alt: "Rutgers EGC Logo",
        logo: EGCLogo,
        tooltipContent: "The student ran governing council of The Rutgers School of Engineering",
        link: "https://egc.rutgers.edu/"
    },
    {
        itemName: "NASA",
        alt: "NASA Logo",
        logo: NasaLogo,
        tooltipContent: "We all know Nasa",
        link: "https://www.nasa.gov/"
    },
    {
        itemName: "Rutgers University",
        alt: "Rutgers University Logo",
        logo: RutgersLogo,
        tooltipContent: "The State University of New Jersey",
        link: "https://www.rutgers.edu/"
    },
    {
        itemName: "Students for the Exploration and Development of Space",
        alt: "SEDS Logo",
        logo: SedsLogo,
        tooltipContent: "A student-run organization empowering the next generation of space explorers through projects, education, and advocacy.",
        link: "https://seds.org/space-for-all/"
    },
    {
        itemName: "University Nanosatellite Program",
        alt: "UNP Logo",
        logo: UNPLogo,
        tooltipContent: `A competitive U.S. Air Force and Space Force program supporting student teams in designing and building small satellites for space missions.`,
        link: "https://universitynanosat.org/"
    },
    {
        itemName: "Dassault Systèmes",
        alt: "Dassault Systèmes Logo",
        logo: DassaultLogo,
        tooltipContent: "The creators of SOLIDWORKS CAD software",
        link: "https://www.3ds.com/"
    },
]

const AboutStarPage = () => {
    
  return (
    <div id="AboutStarPage" className="w-screen flex flex-col gap-4 justify-center items-center relative pt-20">
        
        <div className="w-full relative flex flex-col items-center">
            <TextHoverEffect text="WELCOME"/>
            <a href="#AboutStarPage" className="cursor-default">
                <ChevronDown className="absolute z-40 -bottom-3 sm:bottom-0 md:bottom-1 base:bottom-4 lg:bottom-6 xl:bottom-8 animate-pulse h-auto"/>
            </a>
        </div>
        <div className="relative w-full flex flex-col gap-5 justify-center items-center px-5 text-center z-10">
            <p className="md:px-10">
                STAR (Space Technology Association of Rutgers) is a student-led chapter of SEDS 
                (Students for the Exploration and Development of Space). 
            </p>

            <div className="mt-10">
                <p className="mb-8">Here's a little bit about us</p>
                <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center">
                    <StarStat stat={"3"} headline="Projects" Icon={Wrench} className="bg-radial from-red-400/20 to-transparent"/>
                    <StarStat stat="90+" headline="Active Members" Icon={UsersRound} className="bg-radial from-blue-400/20 to-transparent"/>
                    <StarStat stat="10+" headline="Majors Represented" Icon={BookCopy} className="bg-radial from-red-400/20 to-transparent"/>
                </div>
                <p className="mt-14 md:px-10">
                    Our mission is to inspire and equip students to push the boundaries of innovation. 
                    Through hands-on projects, industry connections, and a driven community, we turn 
                    curiosity into capability and ideas into impact.
                </p>
            </div>
            
            <a href="#JoinUsPage" className="mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Become a Member 
            </a>

            <div className="flex flex-col mt-10 w-full mb-[700px]">
                <p className="text-lg">Oh, and we plan on orbiting Earth</p>
                <div className="relative flex justify-center items-center w-full">
                    <Globe className="w-full min-w-72 max-w-[700px]"/>
                </div>
            </div>

            <div className="w-full flex flex-col gap-4 justify-center items-center text-center px-10">
                <p className="text-2xl">Why STAR?</p>
                <p className="leading-8">
                    Because space is not just the final frontier—it is the next, and we are leading the way. At STAR, 
                    we are engineers, innovators, and problem-solvers committed to advancing space exploration. 
                    From launching weather balloons to designing CubeSats, we transform vision into reality. 
                    If you look to the stars and see opportunity, you belong here. Let’s build the future of 
                    space—together.
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <p>Did You Know STAR is Sponsored by 7 Different Organizations?</p>
                <HoverBlurCards items={sponsors}/>
            </div>

        </div>
        <ShootingStars/>
    </div>
  )
}

export default AboutStarPage