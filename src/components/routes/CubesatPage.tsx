import { TextHoverEffect } from "../ui/text-hover-effect"
import SloshingVideo from "/sloshing-video.mp4"
import { ShootingStars } from "../ui/shooting-stars"

const CubesatPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-black pt-12 relative pb-20">
      <TextHoverEffect text="CUBE SATELLITE"/>
      <div className="flex flex-col justify-center gap-20 items-center px-10 text-center z-20">
        <p>
          Our cube satellite has official name: Spicesat (Sloshing Platform for In-orbit Controller 
          Experimentation Satellite). This team aims to send Rutgers University’s first student-built 
          satellite into space in order to investigate fuel sloshing dynamics in zero-gravity.
        </p>

      </div>

      <ShootingStars />
      <ShootingStars />
    </div>
  )
}
export default CubesatPage