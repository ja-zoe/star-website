import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex justify-center items-center w-screen z-30 h-20 px-10 pt-5">
      {/* Star logo */}
      <a href="/#" className="w-28 absolute left-40">
        <img src="/star-image.png" alt="" className="object-cover " />
      </a>

      {/* Center Navigation Menu */}
      <NavigationMenu className="text-white">
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
      {/* <nav className="hidden md:flex items-center gap-8 text-sm text-white rounded-full overflow-hidden px-5 py-3 backdrop-blur-sm navbar-shadow">
        <a href="/#AboutStarSection">About STAR</a>
        <a href="/#ProjectsSection">Projects</a>
        <a href="/#FAQSection">FAQ</a>
        <a href="/#JoinUsSection">Join Us</a>
        <a href="/#EboardSection">Eboard</a>
      </nav> */}
    </div>
  );
};
export default Navbar;
