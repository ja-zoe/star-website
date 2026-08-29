import DiscordLogo from "/discord-icon.png";
import InstagramLogo from "/instagram-icon.png";
import LinkedinLogo from "/linkedin-icon.png";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="z-30 flex w-full items-center justify-center gap-5 border-t border-white/20 bg-black px-5 py-5 sm:gap-8">
      <a
        href="https://discord.gg/vHa52wx9VK"
        target="_blank"
      rel="noopener noreferrer"
      aria-label="Join the STAR Discord"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
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
      <a href="mailto:rutgersstar@gmail.com" aria-label="Email STAR" className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10">
        <Mail className="h-7 w-7" aria-hidden="true" />
      </a>
    </footer>
  );
};
export default Footer;
