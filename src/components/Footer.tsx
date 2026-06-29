import DiscordLogo from "/discord-icon.png";
import InstagramLogo from "/instagram-icon.png";
import LinkedinLogo from "/linkedin-icon.png";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black w-full py-5 flex flex-col sm:flex-row flex-wrap justify-center gap-20 z-30 items-center border-t-2 border-white/30">
      <a
        href="https://discord.gg/vHa52wx9VK"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the STAR Discord"
      >
        <img
          src={DiscordLogo}
          alt="STAR Discord"
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
          className="w-10 h-10 invert"
        />
      </a>
      <a
        href="https://www.instagram.com/ruspacetech/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="STAR on Instagram"
      >
        <img
          src={InstagramLogo}
          alt="STAR Instagram"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="w-8 h-8 invert"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/spacetechru/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="STAR on LinkedIn"
      >
        <img
          src={LinkedinLogo}
          alt="STAR LinkedIn"
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="w-8 h-8 invert"
        />
      </a>
      <a href="mailto:rutgersstar@gmail.com" aria-label="Email STAR">
        <Mail className="w-10 h-10" aria-hidden="true" />
      </a>
    </footer>
  );
};
export default Footer;
