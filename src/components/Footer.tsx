import DiscordLogo from "/discord-icon.png"
import InstagramLogo from "/instagram-icon.png"
import LinkedinLogo from "/linkedin-icon.png"
import { Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="bg-black w-full py-5 flex flex-col sm:flex-row flex-wrap justify-center gap-20 z-30 items-center border-t-2 border-white/30">
        <a href="https://discord.gg/2YpM8yTWNq" target="_blank"><img src={DiscordLogo} alt="" className="w-10 h-10 invert"/></a>
        <a href="https://www.instagram.com/ruspacetech/?hl=en" target="_blank"><img src={InstagramLogo} alt="" className="w-8 h-8 invert"/></a>
        <a href="https://www.linkedin.com/company/spacetechru/" target="_blank"><img src={LinkedinLogo} alt="" className="w-8 h-8 invert"/></a>
        <a href="" target="_blank"><Mail className="w-10 h-10"/></a>
    </div>
  )
}
export default Footer