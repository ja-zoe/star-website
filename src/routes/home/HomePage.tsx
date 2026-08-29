import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutStarSection from "./AboutStarSection";
import FAQSection from "./FAQSection";
import JoinUsSection from "./JoinUsSection";
import EboardSection from "./EboardSection";
import Seo from "../../components/Seo";
import CurrentStatusStrip from "./CurrentStatusStrip";
import CurrentMissionsSection from "./CurrentMissionsSection";
import PartnersSection from "./PartnersSection";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative app">
      <Seo
        title="STAR — Space Technology Association of Rutgers"
        description="Rutgers' premier space & technology club: CubeSats, NASA Lunabotics robotics, and high-altitude weather balloons. Open to all majors — no experience required."
        path="/"
      />
      <HeroSection />
      <CurrentStatusStrip />
      <ProjectsSection />
      <AboutStarSection />
      <JoinUsSection />
      <CurrentMissionsSection />
      <FAQSection />
      <EboardSection />
      <PartnersSection />
    </div>
  );
};
export default HomePage;
