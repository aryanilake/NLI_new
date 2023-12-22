import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects";
import Groundstation from "./scenes/Groundstation";
import Teams from "./scenes/Teams";
import NewPage from "./components/NewPage";

function App() {
  return (
    <div className="app select-none bg-[#fafaf9] font-[poppins]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/groundstation" element={<Groundstation />} />
        <Route path='/newpage' element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
