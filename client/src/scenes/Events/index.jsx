import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Navbar from "../../components/Navbar";
import spacebg from ".././../assets/spacebg.mp4";
import Countdown from "react-countdown";

function Events() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCountdownComplete = () => {
    // Countdown has ended, show confetti
    setShowConfetti(true);
  };

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
      <div className="relative h-[100vh] font-poppins uppercase overflow-hidden">
        {/* Video Background */}
        <video
          id="bgVideo"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          muted
        >
          <source src={spacebg} type="video/mp4" />
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        ></div>

        <div className="relative flex flex-col items-center justify-center h-full text-white">
         
            {showConfetti && <Confetti />}
            {/* Show confetti when countdown ends */}
            {/* Check if countdown is completed and show message accordingly */}
            {showConfetti ? (
              <>
               
                <h1 className="text-7xl">We had launched!</h1>
              </>
            ) : (
              // Show countdown when it's still ongoing
              <>
                <h1 className="text-7xl font-bold mb-4">NLL Launch </h1>
                <h1 className="text-7xl font-bold mb-4">Countdown</h1>
                <p className="text-xl mb-8">By ISRO PSLV</p>

                {/* The Countdown component */}
                <Countdown
                  date={new Date("2023-12-28T17:24:00")}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="text-2xl">
                      {days}d {hours}h {minutes}m {seconds}s
                    </div>
                  )}
                  onComplete={handleCountdownComplete}
                />
              </>
            )}


        </div>
      </div>
    </>
  );
}

export default Events;
