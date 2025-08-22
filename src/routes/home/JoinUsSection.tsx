import { useEffect, useRef } from "react";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { ShootingStars } from "../../components/ui/shooting-stars";
import DiscordLogo from "/discord-icon.png";

const JoinUsPage = () => {
  const movingItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const movingItem = movingItemRef.current;

    if (!movingItem) return;

    const handleMouseOver = () => {
      movingItem.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      movingItem.style.animationPlayState = "running";
    };

    movingItem.addEventListener("mouseover", handleMouseOver);
    movingItem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      movingItem.removeEventListener("mouseover", handleMouseOver);
      movingItem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [movingItemRef.current]);

  return (
    <div id="JoinUsPage" className="flex flex-col w-full pt-10 pb-20">
      <TextHoverEffect text="JOIN STAR" />
      <div className="flex flex-col gap-10 items-center px-10">
        <p className="text-center">
          Catch the Discord logo to join Star... Or scroll down and click the
          one in the footer
        </p>
        <div className="w-68 h-92 border border-white/20 relative move-div z-40">
          <div ref={movingItemRef} className="w-20 h-20 rounded-lg moveJawn">
            <a href="https://discord.gg/2YpM8yTWNq" target="_blank">
              <img src={DiscordLogo} className="invert transition-all jawn" />
            </a>
          </div>
        </div>
      </div>
      <ShootingStars />
    </div>
  );
};

export default JoinUsPage;
