import React, { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Projectscontent from "../../components/Projectscontent";
import Footer from "../../components/Footer";

function Projects({ projectsData, loading }) {  // Accept projectsData and loading as props
  const [selectedLabel, setSelectedLabel] = useState("BeliefSat-0");

  const handleButtonClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"projects"} />
      <div className="py-20 justify-between items-center h-max mx-auto px-5 mt-5 mb-9">
        <div className="space-x-4">
          {projectsData.map((project) => (
            <Button
              key={project.name}  // Ensure each button has a unique key
              onClick={() => handleButtonClick(project.name)}  // Set the project name as label
              label={project.name}
              type="button"
              isActive={selectedLabel === project.name ? true : false}
            />
          ))}
        </div>
        <div className="results m-4">
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            selectedLabel && <Projectscontent label={selectedLabel} />
          )}
        </div>
      </div>
      <Footer bg={"white"} text={"black"} />
    </>
  );
}

export default Projects;
