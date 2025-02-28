import HeroSection from '../main-page-sections/HeroSection';
import ProjectsSection from '../main-page-sections/ProjectsSection';
import AboutStarSection from '../main-page-sections/AboutStarSection';
import FAQSection from '../main-page-sections/FAQSection';
import JoinUsSection from '../main-page-sections/JoinUsSection';

const MainPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center bg-black relative app'>
      <HeroSection />
      <AboutStarSection />
      <ProjectsSection />
      <FAQSection />
      <JoinUsSection />
    </div>
  )
}
export default MainPage