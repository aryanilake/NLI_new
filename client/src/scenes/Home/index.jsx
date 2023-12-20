import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../../components/TestimonialCard";
import hero from "../../assets/hero.webp";
import Headers from "../../components/Headers";
import CardsDomain from "../../components/CardsDomain";
import Foundercard from "../../components/Foundercard";
import Footer from "../../components/Footer";
import belifsat from "../../assets/belifsat.jpg";
import beliefsat1 from "../../assets/beliefsat1.jpg";
import avruti from "../../assets/avruti.webp"

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
          <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12 text-white">
            <div className=" col-span-1 md:col-span-12">
              <div>
                <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
                  <img
                    className="w-screen duration-700 ease-in-out group-hover:scale-105"
                    src={belifsat}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="mt-4">
                  <div className="flex space-x-2 mb-3">
                    <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                      2003
                    </p>
                  </div>
                  <div className="2xl:space-y-3">
                    <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
                      BeleifSat-0
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
              <div>
                <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
                  <img className="w-screen duration-700 ease-in-out group-hover:scale-105" src={beliefsat1} alt="" srcset="" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex space-x-2 mb-3">
                  <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                    2003
                  </p>
                </div>
                <div className="2xl:space-y-3">
                  <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
                    BeleifSat-1
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <div>
                <div className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl">
                  <img className="w-screen duration-700 ease-in-out group-hover:scale-105" src={avruti} alt="" srcset="" />
                </div>
              </div>
            <div className="mt-4">
                <div className="flex space-x-2 mb-3">
                  <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
                    2003
                  </p>
                </div>
                <div className="2xl:space-y-3">
                  <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
                    Avruti
                  </h3>
                </div>
              </div>
            </div>
          </div>
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
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
