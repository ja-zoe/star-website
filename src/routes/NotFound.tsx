import Seo from "../components/Seo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const NotFound = () => {
  return (
    <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 pt-40 pb-20 text-center">
      <Seo title="Page not found — STAR" path="/404" />
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg max-w-md text-white/80">
        This page drifted off into the void. The link may be broken or the page
        may have moved.
      </p>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href="/"
        className="bg-transparent flex items-center cursor-pointer"
      >
        Return to STAR
      </HoverBorderGradient>
    </div>
  );
};

export default NotFound;
