import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Navbar from "../../components/Navbar";
import spacebg from ".././../assets/spacebg.mp4";
import Countdown from "react-countdown";

function Events() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCountdownComplete = () => {
    setShowConfetti(true);
  };


    const handleImageClick = () => {
      window.open('https://www.youtube.com/your-video-link', '_blank');
    };

  useEffect(() => {
    const video = document.getElementById("bgVideo");
    video.play().catch((error) => {
      console.error("Autoplay error:", error);
    });
  }, []);

  return (
    <>
      <Navbar bgcolor="transparent" textColor="#ffffff" />
      <div className="relative h-[100vh] font-poppins uppercase overflow-hidden">
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
            {showConfetti ? (
              <>
               
             
                <h1 className="text-5xl">BeliefSat-0 has been launched !!!</h1>


              </>
            ) : (
              <>
                <h1 className="text-7xl  font- font-bold mb-4">BeliefSat-0 Launch </h1>
                <h1 className="text-7xl font-bold mb-4">Countdown</h1>
                <p className="text-xl mb-8"> From ISRO'S PSLV C-58 mission</p>

                <Countdown
                  date={new Date("2024-01-01T10:00:00")}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="text-2xl flex flex-row ">
                     <span className="bg-white border-slate-black text-black mx-2 p-2 border-4 border-t-teal-400 rounded-md    flex flex-col items-center justify-center "><b>{days}</b><i className="text-xs">days</i> </span>
                      <span className="bg-white border-slate-black text-black mx-2  p-2 border-4 border-t-fuchsia-400 rounded-md     flex flex-col items-center justify-center"><b>{hours}</b><i className="text-xs">hours</i></span>
                      <span className="bg-white border-slate-black text-black mx-2  p-2 border-4 border-t-pink-400 rounded-md      flex flex-col items-center justify-center"> <b>{minutes}</b><i className="text-xs">minutes</i> </span>
                      <span className="bg-white border-slate-black text-black mx-2 p-2 border-4 border-t-lime-400 rounded-md     flex flex-col items-center justify-center"><b>{seconds}</b><i className="text-xs">seconds</i></span>
                    </div>
                  )}
                  onComplete={handleCountdownComplete}
                />
                 
                  <span className="cursor-pointer" onClick={handleImageClick}><img className="w-20 h-20 m-4" src="https://cdn.dribbble.com/users/623359/screenshots/2972736/media/549b665310aec8a4dbf866757d85fa34.gif"   /> Watch Live!!</span>
             
              </>
            )}
            
        
                

        </div>
 
      
      </div>
    </>
  );
}

export default Events;