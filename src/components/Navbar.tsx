import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  // Scroll-aware underlay: transparent over the hero, solid blurred backdrop once
  // page content scrolls under the bar (design/components.md › Navigation bar).
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Solid blurred underlay applied to the nav controls only (the links cluster +
  // the mobile menu button) — NOT the whole header, so the logo and empty space
  // stay transparent (design/components.md › Navigation bar).
  const underlay = cn(
    "transition-colors duration-300 border border-transparent",
    scrolled && "bg-black/80 backdrop-blur-md border-white/10",
  );

  return (
    <header className="fixed top-0 flex justify-between sm:justify-center items-center w-screen z-30 h-20 px-10 pt-5 gap-20">
      {/* Star logo */}
      <a
        href="/"
        aria-label="STAR home"
        className="w-24 sm:absolute sm:left-[2%] lg:left-28 col-start-1"
      >
        <img
          src="/star-image.png"
          alt="STAR — Space Technology Association of Rutgers"
          width={96}
          height={96}
          fetchPriority="high"
          className="object-cover"
        />
      </a>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className={cn("text-white cursor-pointer rounded-lg p-1", underlay)}
            >
              <Menu size={40} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-neutral-950 border-neutral-800 pt-12 pb-10"
          >
            <nav className="flex flex-col items-center gap-2 text-lg">
              <SheetClose asChild>
                <a
                  href="/#AboutStarSection"
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  About STAR
                </a>
              </SheetClose>

              <div className="flex flex-col items-center w-full">
                <button
                  onClick={() => setProjectsOpen((o) => !o)}
                  className="w-full flex items-center justify-center gap-1 text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Projects
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {projectsOpen && (
                  <div className="flex flex-col items-center w-full mt-1 mb-1 gap-1">
                    <SheetClose asChild>
                      <a
                        href="/cubesat"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Cube Satellite
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="/robotics"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Robotics
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href="/weather-balloon"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Weather Balloon
                      </a>
                    </SheetClose>
                  </div>
                )}
              </div>

              <SheetClose asChild>
                <a
                  href="/#FAQSection"
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  FAQ
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="/#JoinUsSection"
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Join Us
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a
                  href="/#EboardSection"
                  className="w-full block text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Eboard
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="text-white hidden sm:inline">
        <NavigationMenuList className={cn("rounded-full px-3 py-1.5", underlay)}>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#AboutStarSection">About STAR</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <li>
                  <NavigationMenuLink>
                    <a href="/cubesat">Cube Satellite</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <a href="/robotics">Robotics</a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <a href="/weather-balloon">Weather Balloon</a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#FAQSection">FAQ</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#JoinUsSection">Join Us</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#EboardSection">Eboard</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
