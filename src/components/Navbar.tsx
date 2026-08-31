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
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router";
import { useMotionPreferenceControl } from "../hooks/usePrefersReducedMotion";
import { useActiveNavigation } from "../hooks/useActiveNavigation";

const Navbar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const { motionEnabled, systemReduced, toggleMotion } = useMotionPreferenceControl();
  const activeNavigation = useActiveNavigation();
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
    <header data-scroll-aware-navigation className="fixed top-0 flex justify-between md:justify-center items-center w-screen z-30 h-20 px-10 pt-5 gap-20">
      {/* Star logo */}
      <Link
        to="/"
        aria-label="STAR home"
        className="col-start-1 inline-flex min-h-11 w-24 items-center md:absolute md:left-[2%] lg:left-28"
      >
        <img
          src="/star-image.png"
          alt="STAR — Space Technology Association of Rutgers"
          width={96}
          height={96}
          fetchPriority="high"
          className="object-cover"
        />
      </Link>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className={cn("flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg text-white", underlay)}
            >
              <Menu size={40} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-neutral-950 border-neutral-800 pt-12 pb-10"
          >
            <SheetTitle className="sr-only">STAR navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate the STAR website and explore project teams.
            </SheetDescription>
            <nav className="flex flex-col items-center gap-2 text-lg">
              <SheetClose asChild>
                <Link
                  to="/#AboutStarSection"
                  data-navigation-target
                  aria-current={activeNavigation === "about" ? "location" : undefined}
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  About STAR
                </Link>
              </SheetClose>

              <div className="flex flex-col items-center w-full">
                <button
                  type="button"
                  data-navigation-target
                  aria-current={activeNavigation === "projects" ? "location" : undefined}
                  onClick={() => setProjectsOpen((o) => !o)}
                  aria-expanded={projectsOpen}
                  aria-controls="mobile-project-links"
                  className="w-full flex items-center justify-center gap-1 text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Projects
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {projectsOpen && (
                  <div id="mobile-project-links" className="flex flex-col items-center w-full mt-1 mb-1 gap-1">
                    <SheetClose asChild>
                      <Link
                        to="/cubesat"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Cube Satellite
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/robotics"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Robotics
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/weather-balloon"
                        className="w-full text-center text-neutral-400 px-6 py-2.5 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white text-base"
                      >
                        Weather Balloon
                      </Link>
                    </SheetClose>
                  </div>
                )}
              </div>

              <SheetClose asChild>
                <Link
                  to="/#JoinUsSection"
                  data-navigation-target
                  aria-current={activeNavigation === "join" ? "location" : undefined}
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Join Us
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/#FAQSection"
                  data-navigation-target
                  aria-current={activeNavigation === "faq" ? "location" : undefined}
                  className="w-full text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  FAQ
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  to="/#EboardSection"
                  data-navigation-target
                  aria-current={activeNavigation === "eboard" ? "location" : undefined}
                  className="w-full block text-center text-neutral-200 px-6 py-3 rounded-lg transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  Eboard
                </Link>
              </SheetClose>
              <button
                type="button"
                onClick={toggleMotion}
                disabled={systemReduced}
                aria-pressed={!motionEnabled}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 border-t border-white/10 px-6 pt-5 text-sm text-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {motionEnabled ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
                {systemReduced ? "Motion reduced by system" : motionEnabled ? "Turn motion off" : "Turn motion on"}
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="text-white hidden md:inline">
        <NavigationMenuList className={cn("rounded-full px-3 py-1.5", underlay)}>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-full">
              <Link data-navigation-target aria-current={activeNavigation === "about" ? "location" : undefined} className="inline-flex items-center" to="/#AboutStarSection">About STAR</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-navigation-target aria-current={activeNavigation === "projects" ? "location" : undefined} className="bg-transparent rounded-full">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <li>
                  <NavigationMenuLink asChild>
                    <Link className="inline-flex w-full items-center" to="/cubesat">Cube Satellite</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link className="inline-flex w-full items-center" to="/robotics">Robotics</Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link className="inline-flex w-full items-center" to="/weather-balloon">Weather Balloon</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-full">
              <Link data-navigation-target aria-current={activeNavigation === "join" ? "location" : undefined} className="inline-flex items-center" to="/#JoinUsSection">Join Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-full">
              <Link data-navigation-target aria-current={activeNavigation === "faq" ? "location" : undefined} className="inline-flex items-center" to="/#FAQSection">FAQ</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="rounded-full">
              <Link data-navigation-target aria-current={activeNavigation === "eboard" ? "location" : undefined} className="inline-flex items-center" to="/#EboardSection">Eboard</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button
        type="button"
        onClick={toggleMotion}
        disabled={systemReduced}
        aria-label={systemReduced ? "Motion reduced by system settings" : motionEnabled ? "Turn motion off" : "Turn motion on"}
        aria-pressed={!motionEnabled}
        title={systemReduced ? "Motion reduced by system settings" : motionEnabled ? "Turn motion off" : "Turn motion on"}
        className={cn(
          "absolute right-[2%] hidden min-h-11 min-w-11 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 md:inline-flex lg:right-28",
          underlay,
        )}
      >
        {motionEnabled ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      </button>
    </header>
  );
};

export default Navbar;
