import "./App.css";
import { StarsBackground } from "./components/ui/stars-background";
import { Routes, Route, useLocation } from "react-router";
import { lazy, Suspense, useEffect } from "react";
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

const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let frame = 0;
    const targetId = decodeURIComponent(hash.slice(1));

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "auto" });
      }
    };

    frame = requestAnimationFrame(scrollToTarget);
    // The home page contains lazy visual components that can increase document
    // height after the target first mounts. Re-align briefly while layout settles
    // so a deep target is not clamped to the page's earlier maximum scroll.
    const settle = window.setInterval(scrollToTarget, 100);
    const stop = window.setTimeout(() => window.clearInterval(settle), 1200);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(settle);
      window.clearTimeout(stop);
    };
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white space-mono">
      {/* Skip link — first focusable element, lets keyboard/AT users bypass the nav */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar />

      <main id="main-content" className="flex-1">
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
          <HashScroll />
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
