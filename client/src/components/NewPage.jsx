import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import gs from "../assets/gs.jpg";
import Navbar from "./Navbar";

const NewPage = () => {
  const goBack = () => {
    window.history.back();
  };
  const location = useLocation();

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" />
      <div className="h-max mb-10 px-5 md:px-10 xl:px-20 2xl:px-28 pt-[6rem] font-[poppins] ">
        <div className="top">
          <Button
            onClick={() => goBack()}
            label="Back"
            type="button"
            isActive={true}
          />
        </div>
        <div className="mainc pt-2 flex flex-row">
          <div className="leftmain w-[50%]">
            <div className="imgc w-[80%] overflow-hidden flex justify-center items-center flex-col">
              <img className="rounded-lg h-[50vh] " src={location.state.profile} alt="" srcset="" />
              <h2 className="mt-2 flex justify-center items-center text-3xl">
              {location.state.fname} {location.state.lname}
              </h2>
            </div>
            <div className="projnames mt-10">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl">{location.state.project1}</li>
                <li className="m-2 text-2xl">{location.state.project2}</li>
                <li className="m-2 text-2xl">{location.state.project3}</li>
                
              </ol>
            </div>
            <div className="link flex flex-row">
              <button className="w-8 h-10 flex items-center justify-center ml-4 mt-2">
                <a href={location.state.Linkedin} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 18"
                    className="w-6 h-6"
                    fill="rgb(0, 0, 0)"
                  >
                    <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                  </svg>
                </a>
              </button>

            </div>
          </div>
          <div className="righftmain w-[50%]">
            <div className="details">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl">{location.state.Domain}</li>
                <li className="m-2 text-2xl">{location.state.email}</li>
              </ol>
            </div>
            <div className="m-2 about">
              <h2 className=" text-2xl ">About</h2>
              <span className="h-max">{location.state.About}</span>
            </div>
            <div className="details">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl">KJSIT</li>
                <li className="m-2 text-2xl">{location.state.College} Department</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;

// 
//  <h2> {location.state.lname}</h2>
