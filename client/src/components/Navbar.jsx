import React, { useState } from "react";
import logo from "../assets/NEWLEAPLABS.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({bgcolor , textColor}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className=" w-full z-20 fixed top-0 left-0 right-0 font-poppins flex justify-between items-center h-20  mx-auto px-6  text-black" style={{backgroundColor: bgcolor , color:textColor , transition: "0.3 ease-in-out"}  }>
      <div className="flex  justify-between items-center ">
        <img src={logo} className="h-12 w-auto rounded-full border border-black"></img>
        {/* <h1 className="font-[poppins] ml-2 text-3xl font-bold">NLL</h1> */}
      </div>

      <ul className="font-[poppins] hidden md:flex space-x-4">
        <li className="p-4 relative group">
          <Link to="/" className="block">
            Home
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li>
        <li className="p-4 relative group">
        <Link to="/teams" className="block">
            Teams
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li>
        <li className="p-4 relative group">
        <Link to="/projects" className="block">
            Projects
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li>
        <li className="p-4 relative group">
        <Link to="/groundstation" className="block">
        Ground Station
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li>
        <li className="p-4 relative group">
        <Link to="/events" className="block">
        Events
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "ease-in-out duration-500 fixed left-0 top-0 w-[60%] h-full border-r bg-white   "
            : "fixed left-[-100] hidden"
        }
      >
        <h1 className="ml-2 text-3xl mt-9 font-bold">New Leap Labs</h1>
        <ul className="pt-24">
          <li className="p-4 relative group">
            Home
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </li>
          <li className="p-4 relative group">
            Teams
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </li>
          <li className="p-4 relative group">
            Projects
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </li>
          <li className="p-4 relative group">
            GroundStation
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
