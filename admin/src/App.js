import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Navsidebar from "./scenes/global/Navsidebar";
import Dashboard from "./scenes/dashboard";
import Projects from "./scenes/projects";
import Events from "./scenes/events";
import { Routes, Route } from "react-router-dom";
import {  useState } from "react";
import Createmember from "./scenes/createmember";
import Createproject from "./scenes/createproject";

function App() {
  const [theme, colormode] = useMode();
  const [isNavsidebar, setIsNavsidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navsidebar isNavsidebar={isNavsidebar} />
          <main className="content">
            <Topbar setIsNavsidebar={setIsNavsidebar} />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/createmember" element={<Createmember />} />
              <Route path="/createproject" element={<Createproject />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
