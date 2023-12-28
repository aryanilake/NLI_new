import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import spacebg from ".././../assets/spacebg.mp4";
import Countdown from "react-countdown";

function Events() {
  useEffect(() => {
    // Auto-play the video on mount
    const video = document.getElementById("bgVideo");
    video.play().catch((error) => {
      // Handle error, e.g., autoplay not allowed
      console.error("Autoplay error:", error);
    });
  }, []);

  return (
    <>
      <Navbar bgcolor="transparent" textColor="#ffffff" />
      <div className="relative h-[100vh]">
        {/* Video Background */}
        <video
          id="bgVideo"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          muted
        >
          <source src={spacebg} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4">We are launching</h1>
          <p className="text-xl mb-8">By ISRO PSLV</p>

          {/* Countdown */}
          <Countdown
            date={new Date("2024-01-01T00:00:00")}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="text-2xl">
                {days}d {hours}h {minutes}m {seconds}s
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Events;
