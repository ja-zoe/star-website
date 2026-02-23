import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutStarSection from "./AboutStarSection";
import FAQSection from "./FAQSection";
import JoinUsSection from "./JoinUsSection";
import EboardSection from "./EboardSection";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative app">
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
