import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import TestimonialCard from "../../components/TestimonialCard";
import hero from "../../assets/hero.webp";
import Headers from "../../components/Headers";
import CardsDomain from "../../components/CardsDomain";
import Cd from "../../components/Cd";
import Foundercard from "../../components/Foundercard";
import belifsat from "../../assets/belifsat.jpg";
import earth from "../../assets/earth.png";
import space from "../../assets/space.jpg";
import beliefsat1 from "../../assets/beliefsat1.jpg";
import avruti from "../../assets/avruti.jpg"
import software from "../../assets/software.png"
import embedded from "../../assets/embedded.jpg"
import pcb from "../../assets/pcb.jpg"
import structure from "../../assets/structure.jpg"
import data from "../../assets/data.jpg"
import document from "../../assets/document.webp"
import rohit from "../../assets/rohit.jpg"
import supriya from "../../assets/supriya.jpg"

import radio from "../../assets/radio.webp"
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Home() {
  const [navbg, setNavbg] = useState("#fafaf9");
  const [navtext, setNavtext] = useState("#000000");

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const changeBackgroundColor = (color, text) => {
  //     gsap.to(".home", {
  //       backgroundColor: color,
  //       color: text,
  //       duration: 0.2,
  //       ease: "power1.inOut",
  //     });
  //   };

  //   ScrollTrigger.create({
  //     trigger: ".start",
  //     start: "top center",
  //     end: "bottom top",
  //     onUpdate: (self) => {
  //       const progress = (self.progress * 2).toFixed(3);
  //       console.log(progress);

  //       if (progress > 0 && progress < 1.8) {
  //         const backgroundColor = "#000000";
  //         const textColor = "#d1d1d7";
  //         changeBackgroundColor(backgroundColor, textColor);
  //         setNavbg("#000000");
  //         setNavtext("#d1d1d7");
  //       } else {
  //         const backgroundColor = "transparent";
  //         const textColor = "#000000";
  //         changeBackgroundColor(backgroundColor, textColor);
  //         setNavbg("#fafaf9");
  //         setNavtext("#000000");
  //       }
  //     },
  //   });
  // }, []);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* <motion.div
        transition={{
          ease: "linear",
          duration: 2,
          delay: 0.5,
        }}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        <Navbar bgcolor={navbg} textColor={navtext} />
      </motion.div> */}
      <Navbar bgcolor={"#000000"} textColor={"#FFFFFF"} active={"home"} />
      <img className="absolute  w-[800vh] h-[500vh] " src={earth} alt="" />
      <div className="home relative" style={{ backgroundImage: { earth } }}>
        <section className="hero relative flex h-[50vh] py-2 w-full overflow-hidden justify-center sm:h-[120vh] py-15 w-full overflow-hidden justify-center ">
          <div className="z-10 py-20 my-5 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300 font-[poppins] reduced-letter-spacing">
            <motion.div
              transition={{
                ease: "linear",
                duration: 2,
                delay: 1.0,
              }}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              className="title text-5xl sm:text-9xl text-[#FFFFFF] py-20 "
            >
              <h1 className=" overflow-visible">New Leap Labs</h1>
              <h1
                className=" text-transparent font-outline-4 flex justify-center
  overflow-visible py-20"
              >
                KJSIT
              </h1>

              {/* <h1 className=" overflow-visible">New Leap Labs</h1> */}
            </motion.div>
            {/* <div className="title text-5xl sm:text-9xl text-[#FFFFFF] py-20 ">

              <h1 className=" overflow-visible">New Leap Labs</h1>
              <h1
                className=" text-transparent font-outline-4 flex justify-center
                overflow-visible py-20"
              >
                KJSIT
              </h1>
            </div> */}
          </div>

          <motion.div
            initial={{ scale: 2, opacity: 0 }} // initial scale and opacity
            animate={{ scale: 1, opacity: 1 }} // animate to normal scale and full opacity
            transition={{ duration: 2 }} // adjust the duration as needed
            className="intro absolute mx-auto w-[55%] rounded-md md:w-[100%] h-[80%]"
          >
            {/* <motion.img
              src={space}
              alt=""
              className="aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-[100%] h-[100%]"
            /> */}
          </motion.div>

          {/* <div className="intro absolute my-12 mx-auto w-[85%] h-[75%] rounded-md bg-white rounded md:w-[100%] h-[100%] ">
            <img src={space} alt="" className="aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md lg:aspect-[11/9] w-[100%] h-[100%]" />
          </div> */}
          {/* <motion.div
            transition={{
              ease: "linear",
              duration: 2,
              delay: 1.7,
            }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8"
          >
            <span className=" rotate-90 text-body-3 text-xl  ">
              #webelieve
            </span>
          </motion.div> */}
          <div className="absolute bottom-12 mb-[25vh] right-0 text-[#FFFFFF] flex flex-col items-center justify-center space-y-8">
            <span className="rotate-90 text-body-3 text-2xl  ">
              #webelieve
            </span>
          </div>
        </section>

        {/* black */}
        <main className="start h-max px-5 md:px-10 mt-[-25vh] xl:px-20 2xl:px-28">
          <section className="about select-none flex my-20 md:mb-[3%] py-5 flex-col items-center justify-center overflow-hidden ">
            <div className=" flex w-full items-center space-x-20">
              <h1 className=" text-heading-1 text-[1.5rem] font-serif text-[#FFFFFF] leading-[1.25em] md:text-[2.5rem]">
                We foster innovation by inspiring students in satellite technology, contributing towards prestigious awards, and advancing indigenous nano-satellite development for societal impact.
              </h1>
            </div>
          </section>

          <section>
            <Headers title="Projects" size="13vh" />
            <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12 font-serif">
              <div className=" col-span-1 md:col-span-12">
                <div>
                  <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
                    <Link to="/projects" className="block">
                      <img
                        className="w-screen h-[90vh] duration-700 ease-in-out group-hover:scale-105"
                        src={belifsat}
                        alt=""
                        srcset=""
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <div className="flex space-x-2 mb-3">
                      <p className="rounded-full bg-transparent border text-[#FFFFFF] border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                        2018
                      </p>
                    </div>
                    <div className="2xl:space-y-3">
                      <h3 className=" text-3xl font-medium uppercase text-[#FFFFFF] text-primary-200">
                        BeliefSat-1
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
                <div className="overflow-auto w-[700px] h-[500px] rounded-lg">
                  <img src={beliefsat1} alt="Large Image" className="w-full h-auto" />
                </div>
                <div className="mt-4">
                  <div className="flex space-x-2 mb-3">
                    <p className="rounded-full bg-transparent border text-[#FFFFFF] border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                      2019
                    </p>
                  </div>
                  <div className="2xl:space-y-3">
                    <h3 className=" text-3xl font-medium uppercase text-[#FFFFFF] text-primary-200">
                      Ground Station
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-span-1 pt-0 md:col-span-5 md:pt-[100px]">
                <div>
                  <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
                    <img
                      className="w-screen duration-700 ease-in-out group-hover:scale-105"
                      src={avruti}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex space-x-2 mb-3">
                    <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl text-[#FFFFFF]">
                      2023
                    </p>
                  </div>
                  <div className="2xl:space-y-3">
                    <h3 className=" text-3xl font-medium uppercase text-primary-200 text-[#FFFFFF]">
                      Avruti
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-[80px]">
            <Headers title="Domains" size="13vh" />
            {viewportWidth >= 768 ? (
              <div>
                <div className="text-[#FFFFFF] ">
                  {/* First Row */}
                  <div className="items-center justify-center md:flex justify-center">
                    <CardsDomain
                      imageUrl={software}
                      title="Software"
                      description="Software domain involves designing, developing, and maintaining applications and systems for diverse purposes."
                    />
                    <CardsDomain
                      imageUrl={embedded}
                      title="Embedded"
                      description="Embedded domain involves designing computer systems for specific functions, integrating hardware and software for efficiency."
                    />
                    <CardsDomain
                      imageUrl={radio}
                      title="Radio Frequency"
                      description="Radio frequency domain involves electromagnetic waves for wireless communication, spanning from 3 kHz to 300 GHz."
                    />
                    <CardsDomain
                      imageUrl={structure}
                      title="Structure Design"
                      description="Hardware domain involves designing, building, and maintaining physical computer components, including processors, memory, and peripherals."
                    />
                  </div>

                  {/* Second Row */}
                  <div className="md:flex justify-center">
                    <CardsDomain
                      imageUrl={data}
                      title="Data Science"
                      description="Data science involves extracting insights from data using statistical, mathematical, and computational techniques for informed decision-making."
                    />
                    <CardsDomain
                      imageUrl={pcb}
                      title="PCB Design"
                      description="PCB design involves creating circuit layouts on boards for electronic devices, optimizing connectivity and functionality."
                    />
                    <CardsDomain
                      imageUrl={document}
                      title="Non-technical"
                      description="This domain involves communication, process management, and user-focused content creation for clarity and efficiency.
                  "
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="">
                  {/* First Row */}
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={software}
                      title="Software"
                      description="Software domain involves designing, developing, and maintaining applications and systems for diverse purposes."
                    />
                  </div>
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={embedded}
                      title="Embedded"
                      description="Embedded domain involves designing computer systems for specific functions, integrating hardware and software for efficiency."
                    />
                  </div>
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={radio}
                      title="Radio Frequency"
                      description="Radio frequency domain involves electromagnetic waves for wireless communication, spanning from 3 kHz to 300 GHz."
                    />
                  </div>
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={structure}
                      title="Structure Design"
                      description="Hardware domain involves designing, building, and maintaining physical computer components, including processors, memory, and peripherals."
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="md:flex justify-center">
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={data}
                      title="Data Science"
                      description="Data science involves extracting insights from data using statistical, mathematical, and computational techniques for informed decision-making."
                    />
                  </div>
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={pcb}
                      title="PCB Design"
                      description="PCB design involves creating circuit layouts on boards for electronic devices, optimizing connectivity and functionality."
                    />
                  </div>
                  <div className="test flex py-10 items-center justify-center">
                    <Cd
                      imageUrl={document}
                      title="Non-technical"
                      description="This domain involves communication, process management, and user-focused content creation for clarity and efficiency.
                  "
                    />
                  </div>
                </div>
              </div>
            )}

          </section>
        </main>

        <Footer />

      </div >
      <div className="  mt-[-3vh]"></div>
    </>
  );
}

export default Home;
