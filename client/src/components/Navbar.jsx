import React, { useState } from "react";
import logo from "../assets/NEWLEAPLABS.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import da from "../assets/downarrow.svg";
import up from "../assets/uparrow.svg";

const Navbar = ({ bgcolor, textColor, active }) => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  console.log(active)
  return (
    <div className=" w-full z-20 fixed top-0 left-0 right-0 font-poppins flex justify-between items-center h-20  mx-auto px-6  text-black" style={{ backgroundColor: bgcolor, color: textColor, transition: "0.3 ease-in-out" }}>
      <div className="flex  justify-between items-center">
        <img src={logo} className="h-12 w-auto rounded-full border border-black"></img>
        <div className="p-2 text-2xl font-bold font-serif">New Leap Labs</div>
        {/* <h1 className="font-[poppins] ml-2 text-3xl font-bold">NLL</h1> */}
      </div>

      <ul className="font-[poppins] hidden md:flex space-x-4">
        <li className="p-4 relative group">
          <Link to="/" className="block">
            Home
            {(active == "home") ? <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>}

          </Link>
        </li>
        <li className="p-4 relative group">
          <Link to="/projects" className="block">
            Projects
            {(active == "projects") ? <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>}
            {/* <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div> */}
          </Link>
        </li>
        <li className="p-4 relative group">
          <Link to="/achievements" className="block">
            Achievements
            {(active == "achievements") ? <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>}
            {/* <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div> */}
          </Link>
        </li>
        <li className="p-4 relative group">
          <Link to="/groundstation" className="block">
            Ground Station
            {(active == "groundstation") ? <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>}
            {/* <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div> */}
          </Link>
        </li>
        {/* <li className="p-4 relative group">
          <Link to="/teams" className="block">
            About Us
            {(active == "about") ? <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>}
            <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
          </Link>
        </li> */}
        <li className="p-4 relative group" onMouseEnter={() => { setDropdown(true) }} onMouseLeave={() => setDropdown(false)}>
          <div>
            {(active == "team" || active == "founders") ?
              <>
                {dropdown ?
                  <div>
                    About Us
                    <svg className="inline-block h-4 w-4 ml-3" fill={textColor} height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)" stroke="#000000" stroke-width="16.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>

                  </div>

                  : <div>About Us <svg className="inline-block h-4 w-4 ml-2" fill={textColor} height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#000000" stroke-width="16.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.64"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></div>}
              </>
              :
              <>
                {dropdown ?
                  <div>
                    About Us <svg className="inline-block h-4 w-4 ml-2" fill={textColor} height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)" stroke="#000000" stroke-width="16.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                  </div>
                  : <div>About Us <svg className="inline-block h-4 w-4 ml-2" fill={textColor} height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#000000" stroke-width="16.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.64"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></div>}
                <div></div>
              </>
            }

          </div>
          {dropdown ? <ul className="absolute mt-2 right-1 flex flex-col top-18 gap-2 ">
            <li>
              <div className="mt-2 text-center">
                <Link to="/teams" className="text-center">
                  Teams
                  {(active == "team") ? <div className="absolute left-0 right-0 bottom-13 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div ></div>}
                  {/* <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div> */}
                </Link>
              </div>
            </li>
            <hr className="bg-black h-0.5 mt-1" />
            <li>
              <div className="text-center">

                <Link to="/founders" className="block mb-3">
                  Founders & Mentors
                  {(active == "founders") ? <div className="absolute left-0 right-0 bottom-2 h-1 bg-[#7f8c8d] rounded rounded-t"></div> : <div ></div>}
                  {/* <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div> */}
                </Link>
              </div>
            </li>
          </ul> : <div />}


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
          <Link to="/" className="block">
            <li className="p-4 relative group">
              Home
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
            </li>
          </Link>

          <Link to="/teams" className="block">
            <li className="p-4 relative group">
              About us
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
            </li>
          </Link>

          <Link to="/projects" className="block">
            <li className="p-4 relative group">
              Projects
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#7f8c8d] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
            </li>
          </Link>

          <Link to="/groundstation" className="block">
            <li className="p-4 relative group">
              GroundStation
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
            </li>
          </Link>

          <Link to="/achievements" className="block">
            <li className="p-4 relative group">

              Achievements
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#262626] transform scale-x-0 origin-bottom transition-transform duration-300 group-hover:scale-x-100 rounded rounded-t"></div>
            </li>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
