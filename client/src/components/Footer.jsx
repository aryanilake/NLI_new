import React from "react";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import kjsit from "../assets/kjsit.png";
import BackToTopButton from "./BackToTopButton";


function Footer() {
  return (
    <div className="text-black font-poppins ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div className="text-center  lg:text-left mb-4 lg:mb-0">
          <img className="rounded mb-6" src={kjsit} alt="KJSIT Logo" />
          <span className="text-lg font-semibold">
            KJ SOMAIYA INSTITIUTE OF TECHNOLOGY
          </span>
          <p className="mt-2 text-sm">
            Ayurvihar Complex, Eastern Express Highway East, Near Everard Nagar, 400022, Sion
          </p>
          <p className="mt-2 font-bold text-sm">
            nli@somaiya.edu . 7391056286
          </p>
        </div>
        <div className="flex space-x-4">
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          <img src={github} alt="GitHub" className="w-6 h-6" />
          <img src={twitter} alt="Twitter" className="w-6 h-6" />
        </div>
      </div>
      <div className="bg-black text-white py-4 font-[poppins]">
        <div className="text-center flex justify-between items-center px-6 ">
          <span className="text-sm">All rights reserved</span>
          <BackToTopButton/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
