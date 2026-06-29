import "./App.css";
import { StarsBackground } from "./components/ui/stars-background";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShootingStars } from "./components/ui/shooting-stars";

// Route-level code splitting: each page (and its heavy deps — three.js on the
// home page via canvas-reveal, simplex-noise WavyBackground on project pages) is
// fetched on demand instead of riding in the single initial chunk.
const MainPage = lazy(() => import("./routes/home/HomePage"));
const CubesatPage = lazy(() => import("./routes/cubesat/CubesatPage"));
const RoboticsPage = lazy(() => import("./routes/robotics/RoboticsPage"));
const WeatherBalloonPage = lazy(
  () => import("./routes/weatherBalloon/WeatherBalloonPage"),
);
const NotFound = lazy(() => import("./routes/NotFound"));

function App() {
  return (
    <div className="flex flex-col relative space-mono text-white overflow-hidden">
      {/* Skip link — first focusable element, lets keyboard/AT users bypass the nav */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar />

      <main id="main-content">
        {/* Fallback is null: the global StarsBackground + Footer stay mounted
            below, so the screen keeps its black/stars look during chunk fetch
            (no white flash, no spinner noise). */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="cubesat" element={<CubesatPage />} />
            <Route path="robotics" element={<RoboticsPage />} />
            <Route path="weather-balloon" element={<WeatherBalloonPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer and shooting star background */}
      <Footer />
      <StarsBackground />
      <ShootingStars />
      <ShootingStars />
    </div>
  );
}

export default App;
