import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutStarSection from "./AboutStarSection";
import FAQSection from "./FAQSection";
import JoinUsSection from "./JoinUsSection";
import EboardSection from "./EboardSection";
import Seo from "../../components/Seo";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative app">
      <Seo
        title="STAR — Space Technology Association of Rutgers"
        description="Rutgers' premier space & technology club: CubeSats, NASA Lunabotics robotics, and high-altitude weather balloons. Open to all majors — no experience required."
        path="/"
      />
      {/* Accessible/SEO top heading — the visible section titles are decorative
          SVG (TextHoverEffect), so the page's h1 is provided here, sr-only. */}
      <h1 className="sr-only">
        Space Technology Association of Rutgers (STAR)
      </h1>
      <HeroSection />
      <AboutStarSection />
      <ProjectsSection />
      <FAQSection />
      <JoinUsSection />
      <EboardSection />
    </div>
  );
};
export default HomePage;
