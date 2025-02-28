import { ShootingStars } from "../ui/shooting-stars";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Globe } from "../magicui/globe"
import StarStat from "../StarStat";
import SponsorCards from "../SponsorCards";
import { Wrench, UsersRound, BookCopy } from 'lucide-react';

const AboutStarPage = () => {
    
  return (
    <div id="AboutStarPage" className="w-screen flex flex-col gap-0 justify-center items-center relative pt-20">
        <TextHoverEffect text="WELCOME"/>
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
                <SponsorCards />
            </div>

        </div>
        <ShootingStars/>
    </div>
  )
}

export default AboutStarPage