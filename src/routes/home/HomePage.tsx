import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutStarSection from "./AboutStarSection";
import FAQSection from "./FAQSection";
import JoinUsSection from "./JoinUsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative app">
      <HeroSection />
      <AboutStarSection />
      <ProjectsSection />
      <FAQSection />
      <JoinUsSection />
    </div>
  );
};
export default HomePage;
