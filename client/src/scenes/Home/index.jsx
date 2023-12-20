import React from "react";
import hero from "../../assets/hero.webp";
import Headers from "../../components/Headers";
import CardsDomain from "../../components/CardsDomain";
import Foundercard from "../../components/Foundercard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../../components/TestimonialCard";

function Home() {
  return (
    <div className="home ">
      <section className="hero relative flex h-[95vh] py-20 w-full  overflow-hidden justify-center ">
        <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-accent-300">
          <div className="title text-9xl  font-[poppins] text-[#262626] py-16 ">
            <h1 className=" overflow-visible">New Leap Labs</h1>
            <h1
              className=" text-transparent font-outline-4 flex justify-center
  overflow-visible"
            >
              KJSIT
            </h1>

            <h1 className=" overflow-visible">New Leap Labs</h1>
          </div>
        </div>
        <div className="intro absolute mx-auto   w-[55%]  rounded-md">
          <img
            src={hero}
            alt=""
            className="  aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          />
        </div>
        <div className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
          <span className=" rotate-90 text-body-3 text-xl font-[poppins] ">
            #webelieve
          </span>
        </div>
      </section>
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28 ">
        <section className="about select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden ">
          <div className=" flex w-full items-center space-x-20">
            <h1 className="font-[poppins] text-heading-1 text-[5rem] text-[#d1d1c7] leading-[1.25em] md:leading-[1.08em]">
              We create elevating digital experiences that inspire and connect
              with people through development and design.
            </h1>
          </div>
        </section>

        <section>
          <Headers title="Projects" />
        </section>

        <section>
          <Headers title="Our Domains" />
          <div className=" font-[poppins]">
            {/* First Row */}
            <div className="flex justify-center">
              <CardsDomain
                imageUrl={hero}
                title="Software"
                description="Hey! I am Subhadip software member"
              />
              <CardsDomain
                imageUrl={hero}
                title="Embedded"
                description="hjshjs"
              />
              <CardsDomain
                imageUrl={hero}
                title="Radio Frequency"
                description="hjshjs"
              />
              <CardsDomain
                imageUrl={hero}
                title="Radio Frequency"
                description="hjshjs"
              />
            </div>

            {/* Second Row */}
            <div className="flex justify-center">
              <CardsDomain
                imageUrl={hero}
                title="Radio Frequency"
                description="hjshjs"
              />
              <CardsDomain
                imageUrl={hero}
                title="Radio Frequency"
                description="hjshjs"
              />
              <CardsDomain
                imageUrl={hero}
                title="Radio Frequency"
                description="hjshjs"
              />
            </div>
          </div>
        </section>
      </main>

      <main className="px-5 md:px-10 xl:px-20 2xl:px-28 ">
        <section>
          <Headers title="Founders" />
          <div className="flex justify-center">
            <Foundercard imageUrl={hero} title="Subhadip Samanta" />
            <Foundercard imageUrl={hero} title="Subhadip Samanta" />
            <Foundercard imageUrl={hero} title="Subhadip Samanta" />
          </div>
        </section>

        <div className="Testimonials mb-10 font-[poppins]">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <TestimonialCard
                text="Jai Shree Ram"
                author="Shree Hari"
                company="Global Foundation"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Elvish Bhai ke age koi bol sakta h kya!!"
                author="Elvish Bhai"
                company="Jeher.Co"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Inky Pinky Ponky donkey dies monkey cries"
                author="Exam Cell"
                company="KJSHIT"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                text="Sher abhi mehnat nhi karega! kyuki sher busyyy hai"
                author="Sher"
                company="Ek Tha Tiger"
              />
            </SwiperSlide>
           
          </Swiper>
        </div>
      </main>
    </div>
  );
}

export default Home;
