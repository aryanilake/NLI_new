// import React, { useEffect, useState } from "react";
// import Confetti from "react-confetti";
// import Navbar from "../../components/Navbar";
// import spacebg from ".././../assets/spacebg.mp4";
// import Countdown from "react-countdown";

// function Achievements() {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleCountdownComplete = () => {
//     setShowConfetti(true);
//   };


//   const handleImageClick = () => {
//     window.open('https://www.youtube.com/your-video-link', '_blank');
//   };

//   useEffect(() => {
//     const video = document.getElementById("bgVideo");
//     video.play().catch((error) => {
//       console.error("Autoplay error:", error);
//     });
//   }, []);

//   return (
//     <>
//       {/* <Navbar bgcolor="#ffffff" textColor="#000000" />
//       <div className="achievements">
//         <div style={{display:flex}}>
//           <div className="image">
//       hello
//           </div>
//           <div className="content">
// hello
//           </div>
//         </div>
//       </div> */}

//       <Navbar bgcolor="#ffffff" textColor="#000000" />
//       <div>
//         hello
//       </div>
//       <Navbar bgcolor="#ffffff" textColor="#000000" />
//       <div className="relative h-[100vh] font-poppins uppercase overflow-hidden">
//         <video
//           id="bgVideo"
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           loop
//           muted
//         >
//           <source src={spacebg} type="video/mp4" />
//         </video>

//         <div
//           className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
//           style={{ mixBlendMode: "multiply" }}
//         ></div>

//         <div className="relative flex flex-col items-center justify-center h-full text-white">

//           {showConfetti && <Confetti />}
//           {showConfetti ? (
//             <>


//               <h1 className="text-5xl ">BeliefSat-0 has been launched !!!</h1>


//             </>
//           ) : (
//             <>
//               <h1 className="text-7xl  font- font-bold mb-4">BeliefSat-0 Launch </h1>
//               <h1 className="text-7xl font-bold mb-4">Countdown</h1>
//               <p className="text-xl mb-8"> From ISRO'S PSLV C-58 mission</p>

//               <Countdown
//                 date={new Date("2024-01-01T10:00:00")}
//                 renderer={({ days, hours, minutes, seconds }) => (
//                   <div className="text-2xl flex flex-row ">
//                     <span className="bg-white border-slate-black text-black mx-2 p-2 border-4 border-t-teal-400 rounded-md    flex flex-col items-center justify-center "><b>{days}</b><i className="text-xs">days</i> </span>
//                     <span className="bg-white border-slate-black text-black mx-2  p-2 border-4 border-t-fuchsia-400 rounded-md     flex flex-col items-center justify-center"><b>{hours}</b><i className="text-xs">hours</i></span>
//                     <span className="bg-white border-slate-black text-black mx-2  p-2 border-4 border-t-pink-400 rounded-md      flex flex-col items-center justify-center"> <b>{minutes}</b><i className="text-xs">minutes</i> </span>
//                     <span className="bg-white border-slate-black text-black mx-2 p-2 border-4 border-t-lime-400 rounded-md     flex flex-col items-center justify-center"><b>{seconds}</b><i className="text-xs">seconds</i></span>
//                   </div>
//                 )}
//                 onComplete={handleCountdownComplete}
//               />

//               <span className="cursor-pointer" onClick={handleImageClick}><img className="w-20 h-20 m-4" src="https://cdn.dribbble.com/users/623359/screenshots/2972736/media/549b665310aec8a4dbf866757d85fa34.gif" /> Watch Live!!</span>

//             </>
//           )}




//         </div>


//       </div>
//     </>
//   );
// }

// export default Achievements;


import React, { useEffect, useState, useCallback } from 'react';
import Navbar from "../../components/Navbar";
import software from "../../assets/software.png";
import { getAllachievements } from '../../helper/helper';
import Headers from "../../components/Headers";
// import Spline from '@splinetool/react-spline';


const Achievements = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const result = await getAllachievements();
      const res1 = result.data.map((item) => ({
        aname: item.name,
        image: item.image,
        details: item.details,
        date: item.date
      }));
      setResult(res1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"achievements"} />
      <div className="mt-20 text-2xl block font-[poppins]">
        <div className="text-center font-bold md:text-5xl">
          <Headers title="Achievements" />
        </div>
        {loading ? (
          <>
            <div className='p-5'>Loading...</div>
            {/* <Spline scene="https://prod.spline.design/JMJrmDJrTm2R4abx/scene.splinecode" /> */}
          </>
        ) : (
          result.map((item, index) => (
            <div key={index} className="md:flex p-8 m-8">
              {index % 2 === 1 ? (
                <>
                  <div className="flex items-center justify-center md:w-1/2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div>{item.details}</div>
                      <div className="mt-4">{item.date}</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center md:w-1/2">
                    <img className="h-80 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)]" src={item.image} alt="Achievement" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center md:w-1/2">
                    <img className="h-80 md:shadow-[0px_0px_50px_15px_rgba(0,0,0,0.3)]" src={item.image} alt="Achievement" />
                  </div>
                  <div className="flex items-center justify-center md:w-1/2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div>{item.details}</div>
                      <div className="mt-4">{item.date}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Achievements;

