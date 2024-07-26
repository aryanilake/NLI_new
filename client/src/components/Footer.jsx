import React from "react";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import kjsit from "../assets/kjsit.png";
import BackToTopButton from "./BackToTopButton";


function Footer() {
  return (
    <div className="text-black mt-[-2vh] font-poppins bg-white ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-1">
        <div className="text-center p-5 lg:text-left mb-4 lg:mb-0 w-full">
          <img className="rounded mb-6" src={kjsit} alt="KJSIT Logo" />
          <span className="text-lg font-semibold">
            KJ SOMAIYA INSTITIUTE OF TECHNOLOGY
          </span>
          <p className="mt-2 text-sm">
            Ayurvihar Complex, Eastern Express Highway East, Near Everard Nagar, 400022, Sion
          </p>

          <p className="mt-2 font-bold text-sm">
            nli@somaiya.edu  9892168052
          </p>

          <div className="flex justify-end space-x-4 p-1">
            <a href="https://www.instagram.com/nll.kjsit/"><img src={instagram} alt="instagram" className="w-6 h-6"></img></a>
            <a href="https://www.facebook.com/nlikjsieit/"><img src={facebook} alt="Facebook" className="w-6 h-6"></img></a>
            <a href="https://in.linkedin.com/company/new-leap-initiative-kjsit"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="https://github.com/NewLeapKjsieit"><img src={github} alt="GitHub" className="w-6 h-6" /></a>
            <a href="https://twitter.com/NLIspaceclub"><img src={twitter} alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>


      <div className="bg-white text-black py-4 font-[poppins]">
        <div className="text-center flex justify-between items-center px-6 ">
          <span className="text-sm">All rights reserved</span>
          <BackToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Footer;
