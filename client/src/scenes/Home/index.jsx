import React from "react";
import hero from "../../assets/hero.webp";
import Headers from "../../components/Headers";

function Home() {
  return (
    <div className="home overflow-hidden">
      <section className="hero relative flex h-[95vh] py-20 w-full  overflow-hidden justify-center ">
        <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
          <div className="title text-9xl  font-[poppins] text-[#262626] py-16 ">
            <h1 className=" overflow-visible">New Leap Labs</h1>
            <h1 className=" text-transparent font-outline-4 flex justify-center
  overflow-visible">KJSIT</h1>
            
          

            <h1 className=" overflow-visible">New Leap Labs</h1>
          </div>
        </div>
        <div className="intro absolute mx-auto   w-[55%]  rounded-md">
          <img src={hero} alt="" className="  aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto" />
        </div>
        <div className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
          <span className=" rotate-90 text-body-3 text-xl font-[poppins] ">#webelive</span>
      
        </div>
      </section>
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28 ">

      <section className="about select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden ">
        <div className=" flex w-full items-center space-x-20">
          <h1 className="font-[poppins] text-heading-1 text-[5rem] text-[#d1d1c7] leading-[1.25em] md:leading-[1.08em]">
          We create elevating digital experiences that inspire and connect with people through development and design.
          </h1>
        </div>
      </section>
      <section>
      <Headers title="Projects"/>

      </section>
      </main>
    </div>
  );
}

export default Home;
