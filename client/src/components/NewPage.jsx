import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import gs from "../assets/gs.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
  type="button"
  className = "!bg-transparent !text-black !hover:bg-gray-200 !shadow-none !border-none"
  isActive={true}
  label={
    <span className="flex items-center bg-transperant gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent w-4 h-6" fill="white" viewBox="0 0 320 512">
        <path d="M34.52 239l194.3-194.3c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L131.91 256l153.41 153.4c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L34.52 273c-9.37-9.4-9.37-24.6 0-34z" />
      </svg>
      
    </span>
  }
/>

        </div>
        <div className="mainc pt-2 mt-10 flex items-center justify-center flex-row  [@media(max-width:800px)]:flex-col">
          <div className="leftmain justify-center items-center w-[100%] md: w-[50%] [@media(max-width:800px)]:w-[100%] ">
            <div className="imgc w-[100%] overflow-hidden flex justify-center items-center md:w-[80%] flex justify-center items-center flex-col [@media(max-width:800px)]:w-[100%] ">
              <img className="rounded-lg h-[50vh] [@media(max-width:800px)]:w-[100%] [@media(max-width:800px)]:p-[10px] rounded-lg [@media(max-width:800px)]:rounded-[10px] " src={location.state.profile} alt="" srcset="" />
              <h2 className="mt-2 flex justify-center items-center text-3xl">
                {location.state.fname} {location.state.lname}
              </h2>

            </div>
          
          </div>
          <div className="righftmain  md:w-[50%]">
            <div className="details">
              <ol className="md:flex  flex-row [@media(max-width:800px)]:p-1">
                <li className="m-2 text-2xl font-bold  ">{location.state.Domain}</li>
                {/* <br /> */}
                <li className="m-2 text-lg md:m-2 text-2xl">{location.state.email}</li>
              </ol>
            </div>
            <div className="m-2 about [@media(max-width:800px)]:p-1 [@media(max-width:800px)]:text-justify [@media(max-width:800px)]:p-1">
              <h2 className=" text-2xl font-bold ">About</h2>
              <span className="h-max">{location.state.About}</span>
            </div>
            <div className="details [@media(max-width:800px)]:p-1 ">
              <ol className="flex  flex-row">
                <li className="m-2 text-2xl font-bold">KJSIT</li> 
                <li className="m-3 text-lg md:m-2 text-2xl">{location.state.College} Department</li>
              </ol>
            </div>
            
            {/* <div className="projnames mt-2">
              <ol className="flex  flex-row [@media(max-width:800px)]:flex-col">
                <li className="m-2   text-0.9xl font-bold md:text-1xl pt-2 pl-4 pr-4 md:m-2 rounded-[10px] bg-gray-500 text-white shadow-[0_0_10px_#ededed] [@media(max-width:800px)]:text-0.4xl [@media(max-width:800px)]:w-[100%] [@media(max-width:800px)]:text-center p-2 ">{location.state.project1}</li>
                <li className="m-2 text-0.9xl font-bold md:text-1xl p-2 pl-4 pr-4 md:m-2 rounded-[10px] bg-gray-500 text-white shadow-[0_0_10px_#ededed] [@media(max-width:800px)]:text-0.4xl [@media(max-width:800px)]:w-[100%] [@media(max-width:800px)]:text-center p-2 ">{location.state.project2}</li>
                <li className="m-2 text-0.9xl font-bold md:text-1xl p-2 pl-4 pr-4 md:m-2 rounded-[10px] bg-gray-500 text-white shadow-[0_0_10px_#ededed] [@media(max-width:800px)]:text-0.4xl [@media(max-width:800px)]:w-[100%] [@media(max-width:800px)]:text-center p-2">{location.state.project3}</li>

              </ol>
            </div> */}
            <div className="projnames mt-2">
  <ol className="flex flex-row flex-wrap gap-2 [@media(max-width:800px)]:flex-col">
    {Object.entries(location.state)
      .filter(([key, value]) =>
        key.toLowerCase().includes("project") &&
        value &&
        value.trim().toLowerCase() !== "na"
      )
      .map(([key, value], index) => (
        <li
          key={index}
          className="m-2 text-0.9xl font-bold md:text-1xl pt-2 pl-4 pr-4 rounded-[10px] bg-gray-500 text-white shadow-[0_0_10px_#ededed] [@media(max-width:800px)]:text-0.4xl [@media(max-width:800px)]:w-[90%] [@media(max-width:800px)]:text-center p-2"
        >
          {value}
        </li>
      ))}
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
        </div>
        
      </div>
      <div className=" border-t-[5px] border-t-[#ededed]" >
        <Footer />
        </div>
    </>
  );
};

export default NewPage;

//
//  <h2> {location.state.lname}</h2>
