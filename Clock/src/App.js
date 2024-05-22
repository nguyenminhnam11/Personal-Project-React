import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Clock from "./pages/Clock";
import StopWatch from "./pages/StopWatch";
import Timers from "./pages/Timers";
import Battery from "./components/Battery";
import Alarm from "./pages/Alarm";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="dynamic-island"></div>
        <Battery />
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/timers" element={<Timers />} />
        </Routes>
        <Navbar />
        <div className="home-bar"></div>
      </div>
    </div>
  );
}

export default App;
