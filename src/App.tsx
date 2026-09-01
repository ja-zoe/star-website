import "./App.css";
import { StarsBackground } from "./components/ui/stars-background";
import { Routes, Route, useLocation } from "react-router";
import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShootingStars } from "./components/ui/shooting-stars";

// Route-level code splitting keeps project-specific content and visual modules
// out of the initial route bundle.
const MainPage = lazy(() => import("./routes/home/HomePage"));
const CubesatPage = lazy(() => import("./routes/cubesat/CubesatPage"));
const RoboticsPage = lazy(() => import("./routes/robotics/RoboticsPage"));
const WeatherBalloonPage = lazy(
  () => import("./routes/weatherBalloon/WeatherBalloonPage"),
);
const NotFound = lazy(() => import("./routes/NotFound"));

const RouteFallback = () => (
  <div
    className="flex min-h-[100svh] items-center justify-center bg-black px-6"
    aria-hidden="true"
  >
    <div className="w-full max-w-5xl animate-pulse space-y-6">
      <div className="h-3 w-32 bg-white/15" />
      <div className="h-14 w-3/4 max-w-2xl bg-white/10" />
      <div className="h-4 w-full max-w-xl bg-white/[0.07]" />
      <div className="h-4 w-2/3 max-w-md bg-white/[0.07]" />
    </div>
  </div>
);

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

const PathScrollReset = () => {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    const changedRoute = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    if (!changedRoute || hash) return;

    const reset = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, behavior: "auto" });
      root.style.scrollBehavior = previousBehavior;
    };
    reset();
    const frame = requestAnimationFrame(reset);
    const settle = window.setInterval(reset, 100);
    const stop = window.setTimeout(() => window.clearInterval(settle), 600);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(settle);
      window.clearTimeout(stop);
    };
  }, [hash, pathname]);

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

      <main id="main-content" className="min-h-[100svh] flex-1">
        <PathScrollReset />
        <Suspense fallback={<RouteFallback />}>
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
    </div>
  );
}

export default App;
