import { TextHoverEffect } from "../ui/text-hover-effect"
import { ShootingStars } from "../ui/shooting-stars"
import CubesatSubteams from "../CubesatSubteams"


const CubesatPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-black px-10 pt-12 relative pb-20 text-white">
      <TextHoverEffect text="CUBE SATELLITE" isWb/>
      <div className="flex flex-col justify-center gap-16 items-center px-10 text-center">
        <p>The Sloshing Problem</p>
        
        <div className="flex gap-5">
          <div>
            <img src="0gSloshing.gif"/>
            <p>
              Disturbances to liquids in microgravity environments cause them to interact in a 
              peculiar way. Without gravity pulling them down, liquids form floating blobs that 
              wobble and stick together when bumped. Unlike on Earth, these liquids continue to 
              slosh and oscillate for extended periods, never truly reaching a static state. 
              Without gravity to dampen the movement, even tiny disturbances can cause persistent 
              motion that continues long after the initial disruption, making liquid management in 
              spacecraft particularly challenging.
            </p>
          </div>

          <div>
            <img src="1gSloshing.gif"/>
            <p>
              Disturbances to liquids in normal Earth gravity cause them to behave in ways we're familiar with everyday. When disturbed, they create waves that move across the surface, but gravity quickly pulls them back down. The key difference is that liquids in Earth's gravity rapidly settle and reach static equilibrium, finding their level with a flat, calm surface. This predictable settling behavior is something we take for granted in our daily lives but is actually the result of gravity's constant downward force overwhelming other factors like surface tension.
            </p>
          </div>
        </div>

        <p>
          On Earth, spilled coffee settles quickly, but in space, fluids behave in strange and 
          unpredictable ways. Without gravity to keep them in check, liquids slosh and drift, 
          creating challenges for spacecraft stability. Our CubeSat experiment aims to explore 
          innovative ways to mitigate fluid sloshing in microgravity, a problem that could impact 
          everything from fuel storage to life support systems in future space missions.
        </p>

        <p>
          A single team can't handle every aspect of CubeSat development, which is why we've divided 
          the work into eight specialized subteams, each focusing on a specific subsystem. Click on
          each one to learn more.
        </p>
        
        <CubesatSubteams />
        
      </div>

      <ShootingStars />
      <ShootingStars />
    </div>
  )
}
export default CubesatPage