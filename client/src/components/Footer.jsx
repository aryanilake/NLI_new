import React from "react";
import twitter from "../../public/assets/twitter.svg";
import github from "../../public/assets/github.svg";
import linkedin from "../../public/assets/linkedin.svg";
import instagram from "../../public/assets/instagram.svg";
import kjsit from "../../public/assets/kjsit.png";
import BackToTopButton from "./BackToTopButton";
import './footerStyles.css'
//Importing icons
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Footer({ bg, text }) {
  return (
    <div style={{ backgroundColor: bg, color: text }} className="mt-[-2vh] font-poppins">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-1">
        <div className="text-center p-5 lg:text-left mb-4 lg:mb-0 w-full">
          <img className="rounded mb-1 w-[15vh] h-[15vh]" src={kjsit} alt="KJSIT Logo" />
          <span className="text-lg font-semibold">
            KJ SOMAIYA INSTITIUTE OF TECHNOLOGY
          </span>
          <p className="text-sm">
            Ayurvihar Complex, Eastern Express Highway East, Near Everard Nagar, 400022, Sion
          </p>

          <p className="mt-2 font-bold text-sm">
            nli@somaiya.edu  9892168052
          </p>
          <div id="iconContainer" >
            <a id="instaIcons" href="https://www.instagram.com/nll.kjsit/">
              <svg fill="white" height='26' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://x.com/NLIspaceclub">
                <svg fill="white" height='24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/new-leap-initiative-kjsit/">
                <svg fill="white" height='24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
              </a>
          </div>
          <div className="flex justify-start space-x-4 p-1">
            <a href="https://www.instagram.com/nll.kjsit/"><img src={instagram} alt="instagram" className="w-6 h-6"></img></a>
            {/* <a href="https://www.facebook.com/nlikjsieit/"><img src={facebook} alt="Facebook" className="w-6 h-6"></img></a> */}
            <a href="https://in.linkedin.com/company/new-leap-initiative-kjsit"><img src={linkedin} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="https://github.com/NewLeapKjsieit"><img src={github} alt="GitHub" className="w-6 h-6" /></a>
            <a href="https://twitter.com/NLIspaceclub"><img src={twitter} alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>


      <div className="py-4 font-[poppins]" style={{ background: text, color: bg }}>
        <div className="text-center flex justify-between items-center px-6 ">
          <span className="text-sm">All rights reserved</span>
          <BackToTopButton />
        </div>
      </div>
    </div>
  );
}

export default Footer;
