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
import { useState } from "react";

const Navbar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="fixed top-0 flex justify-between sm:justify-center items-center w-screen z-30 h-20 px-10 pt-5 gap-20">
      {/* Star logo */}
      <a
        href="/#"
        className="w-24 sm:absolute sm:left-[2%] lg:left-28 col-start-1"
      >
        <img src="/star-image.png" alt="" className="object-cover" />
      </a>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={40} className="text-white cursor-pointer" />
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
        <NavigationMenuList>
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
    </div>
  );
};

export default Navbar;
