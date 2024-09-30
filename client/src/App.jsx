import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects";
import Groundstation from "./scenes/Groundstation";
import Teams from "./scenes/Teams";
import Founders from "./scenes/Founders";
import NewPage from "./components/NewPage";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Achievements from "./scenes/Achievements";
import Activities from "./scenes/Activities";
import { getAllachievements, getAllactivities, getAllevents, getAllprojects } from './helper/helper';

function App() {
  const lenis = new Lenis();

  // State for achievements, activities, events, and projects
  const [achievementsData, setAchievementsData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);  // Added state for projects
  const [loading, setLoading] = useState(true);

  // Fetch achievements, activities, events, and projects when the app loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const achievementsResponse = await getAllachievements();
        const activitiesResponse = await getAllactivities();
        const eventsResponse = await getAllevents();
        const projectsResponse = await getAllprojects();  // Fetching projects

        // Log the responses for debugging
        console.log("Fetched achievements:", achievementsResponse);
        console.log("Fetched activities:", activitiesResponse);
        console.log("Fetched events:", eventsResponse);
        console.log("Fetched projects:", projectsResponse);

        if (Array.isArray(achievementsResponse.data)) {
          setAchievementsData(achievementsResponse.data);
        }
        if (Array.isArray(activitiesResponse.data)) {
          setActivitiesData(activitiesResponse.data.map(item => ({
            aname: item.name,
            image: item.image,
            details: item.details,
            date: item.date
          })));
        }
        if (Array.isArray(eventsResponse.data)) {
          setEventsData(eventsResponse.data.map(item => ({
            name: item.name,
            image: item.image,
            details: item.details,
            date: item.date
          })));
        }
        if (Array.isArray(projectsResponse.data)) {  // Setting the projects data
          setProjectsData(projectsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Setup Lenis for smooth scrolling
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="app select-none bg-[#fafaf9]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projectsData={projectsData} loading={loading} />} /> {/* Pass projects data */}
        <Route path="/teams" element={<Teams />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/groundstation" element={<Groundstation />} />
        <Route path="/achievements" element={<Achievements achievements={achievementsData} loading={loading} />} />
        <Route
          path="/activities"
          element={<Activities activitiesData={activitiesData} eventsData={eventsData} loading={loading} />}
        />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
