import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects";
import Groundstation from "./scenes/Groundstation";
import Teams from "./scenes/Teams";
import Founders from "./scenes/Founders";
import NewPage from "./components/NewPage";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Achievements from "./scenes/Achievements"
import Activities from "./scenes/Activities"
import { getAllachievements } from './helper/helper'; 
import { useState,useEffect } from "react";

function App() {
  const lenis = new Lenis();

  const [achievementsData, setAchievementsData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch achievements data when the app loads
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await getAllachievements();
        console.log("Fetched achievements data:", response); // Log the response
        if (Array.isArray(response.data)) {
          setAchievementsData(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching achievements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

   

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
        <Route path="/founders" element={<Founders />} />
        <Route path="/groundstation" element={<Groundstation />} />
        <Route path="/achievements" element={<Achievements achievements={achievementsData} loading={loading} />} />
        <Route path="/activities" element={<Activities />} />

        <Route path="/newpage" element={<NewPage />} />

      </Routes>

    </div>
  );
}

export default App;
