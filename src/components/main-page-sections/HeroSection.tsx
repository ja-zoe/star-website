import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Cover } from '../ui/cover';
import { FlipWords } from '../ui/flip-words';
import { ShootingStars } from "../ui/shooting-stars";

const HeroPage = () => {
    const words = ["enthusiasts", "hobbyists", "researchers", "afficionados", "trailblazers"];
  
    return (
    <div id='HeroPage' className='h-[60vh] pt-40 flex items-center relative'>
      <div className='flex flex-col gap-6 items-center'>
        <p className='text-sm sm:text-lg lg:text-xl max-w-[600px] text-center px-5'>
          Rutgers' premier club for space and technology&nbsp;
          <span className='inline-flex grow w-[100px]'>
            <FlipWords words={words} className='text-white'/>
          </span>
        </p>
        <div className='flex items-center gap-4 text-sm md:text-xl'>
          <HoverBorderGradient
          containerClassName="rounded-full"
          as="a"
          className="bg-black flex items-center space-x-2 cursor-pointer"
          >
            <a href='#AboutUsPage'>Learn More</a>
          </HoverBorderGradient>

          <Cover className="rounded-4xl"><a className='cursor-pointer' href='#JoinUsPage'>Join Us</a></Cover>
        </div>
      </div>
      <ShootingStars/>
    </div>
  )
}
export default HeroPage