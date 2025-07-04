import React from "react";
import Button from "./Button";
import { projects } from "../helper/projects";

function Projectscontent({ label }) {
  const project = projects.find((proj) => proj.projname === label);

  const redirectTo = (link) => {
    window.location.href = link;
  };

  return (
    <div className="p-5">
      {!project ? (
        <div className="text-xl md:text-2xl text-center">Project not found.</div>
      ) : (
        <>
          {/* Image or Video Section */}
          <div className="flex items-center justify-center rounded-3xl">
            {project.photo ? (
              <img
                className="w-[115%] h-[22rem] md:h-auto md:w-1/2 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)] rounded-3xl"
                style={{ maxHeight: "70vh", maxWidth: "100vh" }}
                src={project.photo}
                alt="Project"
                loading="lazy"
              />
            ) : (
              <p className="text-lg md:text-2xl text-center">No image available.</p>
            )}
          </div>

          {/* Project Description */}
          <div className="text m-1 mt-20">
            <p className="text-base md:text-2xl leading-6 md:leading-8 tracking-wide text-justify">
              {project.about || "No information available."}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-2 justify-center m-2">
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
