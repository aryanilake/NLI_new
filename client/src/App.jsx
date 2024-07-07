import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects";
import Groundstation from "./scenes/Groundstation";
import Teams from "./scenes/Teams";
import NewPage from "./components/NewPage";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Achievements from "./scenes/Events"


function App() {
  const lenis = new Lenis();


  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="app select-none bg-[#fafaf9]  ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/groundstation" element={<Groundstation />} />
        <Route path="/achievements" element={<Achievements />} />

        <Route path="/newpage" element={<NewPage />} />

      </Routes>
      
      <div className="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
