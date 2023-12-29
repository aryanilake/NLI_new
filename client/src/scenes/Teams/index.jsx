// Teams.js
import React, { useState } from "react";
import Button from "../../components/Button";
import CardSlider from "../../components/CardSlider";
import Navbar from "../../components/Navbar";

function Teams() {
  const [selectedLabel, setSelectedLabel] = useState("Beliefsat-0");

  const handleButtonClick = (label) => {
    // console.log(`Clicked: ${label}`);
    setSelectedLabel(label);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" />
      <div className="py-20 font-poppins justify-between items-center h-screen mx-auto px-5 mt-5 mb-9">
        <div className="space-x-4">
          <Button
            onClick={() => handleButtonClick("Beliefsat-0")}
            label="Beliefsat-0"
            type="button"
            isActive={selectedLabel === "Beliefsat-0" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("Beliefsat-1")}
            label="Beliefsat-1"
            type="button"
            isActive={selectedLabel === "Beliefsat-1" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("Avruti")}
            label="Avruti"
            type="button"
            isActive={selectedLabel === "Avruti" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("UASS")}
            label="UASS"
            type="button"
            isActive={selectedLabel === "UASS" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("Somaiya-Pod")}
            label="Somaiya-Pod"
            type="button"
            isActive={selectedLabel === "Somaiya-Pod" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("Crown-GS")}
            label="Crown-GS"
            type="button"
            isActive={selectedLabel === "Crown-GS" ? true : false}
          />
        
        </div>
        <div className="results m-4">
          {selectedLabel && <CardSlider label={selectedLabel} />}
        </div>
      </div>
    </>
  );
}

export default Teams;
