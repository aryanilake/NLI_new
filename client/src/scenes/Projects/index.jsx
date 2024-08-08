// Teams.js
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Projectscontent from "../../components/Projectscontent";
import Footer from "../../components/Footer";

function Projects() {
  const [selectedLabel, setSelectedLabel] = useState("BeliefSat-0");
  const [isDatabaseConnected, setDatabaseConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace the URL with the actual endpoint you want to check
    const serverCheckUrl = "http://localhost:8080";

    const checkServerConnection = async () => {
      try {
        const response = await fetch(serverCheckUrl);

        // Check if the response status is in the 2xx range (success)
        if (response.ok) {
          setDatabaseConnected(true);
        } else {
          setDatabaseConnected(false);
        }
      } catch (error) {
        console.error("Error checking server connection:", error);
        setDatabaseConnected(false);
      }

    };


    // Call the function to check server connection
    checkServerConnection();
  }, []);

  const handleButtonClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"projects"} />
      <div className="py-20  justify-between items-center h-max mx-auto px-5 mt-5 mb-9">
        <div className="space-x-4">
          <Button
            onClick={() => handleButtonClick("BeliefSat-0")}
            label="BeliefSat-0"
            type="button"
            isActive={selectedLabel === "BeliefSat-0" ? true : false}
          />
          <Button
            onClick={() => handleButtonClick("BeliefSat-1")}
            label="BeliefSat-1"
            type="button"
            isActive={selectedLabel === "BeliefSat-1" ? true : false}
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
        </div>
        <div className="results m-4">
          {isDatabaseConnected ? (
            selectedLabel && <Projectscontent label={selectedLabel} />
          ) : (
            <p>Unable to connect to the server.</p>
          )}
        </div>
      </div>
      <Footer bg={"white"} text={"black"} />
    </>
  );
}

export default Projects;
