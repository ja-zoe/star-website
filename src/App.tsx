import "./App.css";
import { StarsBackground } from "./components/ui/stars-background";
import { Routes, Route } from "react-router";
import MainPage from "./routes/home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoboticsPage from "./routes/robotics/RoboticsPage";
import WeatherBalloonPage from "./routes/weatherBalloon/WeatherBalloonPage";
import CubesatPage from "./routes/cubesat/CubesatPage";

function App() {
  return (
    <div className="flex flex-col relative space-mono text-white overflow-hidden">
      {/* Global Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cubesat" element={<CubesatPage />} />
        <Route path="robotics" element={<RoboticsPage />} />
        <Route path="weather-balloon" element={<WeatherBalloonPage />} />
      </Routes>

      {/* Global Footer and shooting star background */}
      <Footer />
      <StarsBackground />
    </div>
  );
}

export default App;
