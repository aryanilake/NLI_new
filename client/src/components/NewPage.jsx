import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import gs from "../assets/gs.jpg";
import Navbar from "./Navbar";

const NewPage = () => {
  const goBack = () => {
    window.history.back();
  };

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
            <div className="imgc w-[80%] overflow-hidden">
              <img className="rounded-lg h-full " src={gs} alt="" srcset="" />
              <h2 className="mt-2 flex justify-center items-center text-3xl">
                Subhadip Samanta
              </h2>
            </div>
            <div className="projnames mt-10">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl">Project 1</li>
                <li className="m-2 text-2xl">Project 1</li>
                <li className="m-2 text-2xl">Project 1</li>
              </ol>
            </div>
            <div className="link">
              <button className="w-8 h-10 flex items-center justify-center ml-4 mt-2">
                <a target="_blank" rel="noopener noreferrer">
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
                <li className="m-2 text-2xl">Year Left</li>
                <li className="m-2 text-2xl">Domain</li>
              </ol>
            </div>
            <div className="m-2 about">
              <h2 className=" text-2xl">About</h2>
              <span className="h-max">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad rerum id nobis, et dolor harum repudiandae deleniti perspiciatis quidem ratione? Alias ea corrupti ullam eveniet eligendi ipsa veritatis non veniam quod voluptates quos consequuntur ducimus ex provident, placeat, quaerat, architecto aliquid omnis? Libero numquam voluptatum praesentium atque amet in veniam, iure accusamus eos culpa eveniet nemo modi voluptatibus minus, sapiente repudiandae natus adipisci enim suscipit at dolores? Molestiae.</span>
            </div>
            <div className="details">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl">KJSIT</li>
                <li className="m-2 text-2xl">Domain</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;

//  const location = useLocation();
//  <h2>{location.state.fname} {location.state.lname}</h2>
