import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { activities } from "../../helper/activities";
import { events } from "../../helper/events";
import Headers from "../../components/Headers";
import Footer from "../../components/Footer";

const Activities = ({ activitiesData, eventsData, loading }) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Navbar bgcolor="#fafaf9" textColor="#000000" active={"activities"} />
            <div className="mt-20 text-2xl block font-[poppins]">
                <div className="text-center font-bold md:text-5xl">
                    <Headers title="Activities" size="12vh" />
                </div>
                {loading ? (
                    <div className="p-5">Loading...</div>
                ) : (
                    activities.map((item, index) => (
                        <div key={index} className="md:flex p-8 ">   
                            {viewportWidth >= 768 ? (
                                index % 2 === 1 ? (
                                    <>
                                        <div className="flex items-center justify-center md:w-1/2">
                                            <div className="flex flex-col items-center justify-center text-justify">
                                                <div className="mt-4">{item.details}</div>
                                                <div className="mt-4 font-bold">{item.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center md:w-1/2">
                                            <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Achievement" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center items-center md:w-1/2">
                                            <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Achievement" />
                                        </div>
                                        <div className="flex items-center justify-center md:w-1/2">
                                            <div className="flex flex-col items-center justify-center text-justify">
                                                <div className="mt-4">{item.details}</div>
                                                <div className="mt-4 font-bold">{item.date}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            ) : (
                                <>
                                    <div className="flex justify-center items-center md:w-1/2">
                                        <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Achievement" />
                                    </div>
                                    <div className="flex items-center justify-center md:w-1/2">
                                        <div className="flex flex-col items-center justify-center text-justify">
                                            <div className="mt-4">{item.details}</div>
                                            <div className="mt-4 font-bold">{item.date}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}

                <div className="text-center font-bold md:text-5xl">
                    <Headers title="Events" size="12vh" />
                </div>
                {loading ? (
                    <div className="p-5">Loading...</div>
                ) : (
                    events.map((item, index) => (
                        <div key={index} className="md:flex p-8 ">
                            {viewportWidth >= 768 ? (
                                index % 2 === 1 ? (
                                    <>
                                        <div className="flex items-center justify-center md:w-1/2">
                                            <div className="flex flex-col items-center justify-center text-justify">
                                                <div className="font-bold text-3xl">{item.name}</div>
                                                <div className="mt-4">{item.details}</div>
                                                <div className="mt-4 font-bold">{item.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center md:w-1/2">
                                            <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Event" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center items-center md:w-1/2">
                                            <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Event" />
                                        </div>
                                        <div className="flex items-center justify-center md:w-1/2">
                                            <div className="flex flex-col items-center justify-center text-justify padding-4">
                                                <div className="mt-4 font-bold text-3xl item-center">{item.name}</div>
                                                <div className="mt-4">{item.details}</div>
                                                <div className="mt-4 font-bold">{item.date}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            ) : (
                                <>
                                    <div className="flex justify-center items-center md:w-1/2">
                                        <img className="h-80 w-[550px] rounded-2xl shadow-lg" src={item.image} alt="Event" />
                                    </div>
                                    <div className="flex items-center justify-center md:w-1/2">
                                        <div className="flex flex-col items-center justify-center text-justify">
                                            <div className="mt-4 font-bold text-3xl item-center">{item.name}</div>
                                            <div className="mt-4">{item.details}</div>
                                            <div className="mt-4 font-bold">{item.date}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
            <Footer bg={"white"} text={"black"} />
        </>
    );
};

export default Activities;
