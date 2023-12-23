// Teams.js
import React, { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Projectscontent from "../../components/Projectscontent";




function Projects() {
  const [selectedLabel, setSelectedLabel] = useState("Beliefsat-1");

  const handleButtonClick = (label) => {
    setSelectedLabel(label);
  };


  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" />
    <div className="py-20  justify-between items-center h-max mx-auto px-5 mt-5 mb-9">
      <div className="space-x-4">
        <Button
          onClick={() => handleButtonClick("Beliefsat-1")}
          label="Beliefsat-1"
          type="button"
          isActive={selectedLabel === "Beliefsat-1" ? true : false}
        />
        <Button
          onClick={() => handleButtonClick("Beliefsat-2")}
          label="Beliefsat-2"
          type="button"
          isActive={selectedLabel === "Beliefsat-2" ? true : false}
        />
        <Button
          onClick={() => handleButtonClick("Avruti")}
          label="Avruti"
          type="button"
          isActive={selectedLabel === "Avruti" ? true : false}
        />
      </div>
      <div className="results m-4">
        {selectedLabel &&  <Projectscontent label={selectedLabel}/> }
    
       
      </div>
    </div>
    </>
  );
}

export default Projects;
