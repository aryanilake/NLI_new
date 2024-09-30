import React from "react";
import Button from "./Button";

function Projectscontent({ label, projects = [] }) {
  // Safely find the project data based on the selected label
  const project = projects.find((proj) => proj.projname === label);



  const redirectTo = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      {!project ? (
        <div className="p-5 text-2xl">Project not found.</div>
      ) : (
        <>
          <div className="flex items-center justify-center rounded-3xl">
            {project.photo ? (
              <img
                className="w-1/2 h-1/2 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)] rounded-3xl"
                style={{ maxHeight: "70vh", maxWidth: "100vh" }}
                src={project.photo}
                alt="Project"
                loading="lazy" // Lazy loading the image
              />
            ) : (
              <p className="text-2xl">No image available.</p>
            )}
          </div>
          <div className="text m-5">
            <p className="text-2xl leading-8 tracking-wide">{project.about || "No information available."}</p>
          </div>
          <div className="flex flex-row m-2">
            {project.link1 && (
              <Button
                onClick={() => redirectTo(project.link1)}
                label="Link 1"
                type="button"
                isActive={true}
              />
            )}
            {project.link2 && (
              <Button
                onClick={() => redirectTo(project.link2)}
                label="Link 2"
                type="button"
                isActive={true}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Projectscontent;
