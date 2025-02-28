import './App.css'
import { StarsBackground } from "./components/ui/stars-background";
import { Routes, Route } from "react-router"
import MainPage from './components/routes/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoboticsPage from './components/routes/RoboticsPage';
import CubesatPage from './components/routes/CubesatPage';
import WeatherBalloonPage from './components/routes/WeatherBalloonPage';

function App() {
  return (
    <div className='flex flex-col relative space-mono text-white overflow-hidden'>
      {/* Global Navbar */}
      <Navbar />
      
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='cubesat' element={<CubesatPage />}/>
        <Route path='robotics' element={<RoboticsPage />}/>
        <Route path='weather-balloon' element={<WeatherBalloonPage />}/>
      </Routes>

      {/* Global Footer and shooting star background */}
      <Footer />
      <StarsBackground />
    </div>
  )
}

export default App
