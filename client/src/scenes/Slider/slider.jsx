import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import CircularGallery from './CircularGallery';

// Import images using correct relative paths
import BeliefSat0Launch from '../../assets/BeliefSat-0 Launch.jpg';
import BeliefSat0 from '../../assets/BeliefSat-0.jpg';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import testing from './images/testing.jpg';
import img3 from './images/img3.jpeg';
import shindesir from './images/shindesir.jpg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import launchpic1 from './images/launchpic1.jpg';
import launchpic2 from './images/launchpic2.jpg';
import launchpic3 from './images/launchpic3.jpg';
import launchpic4 from './images/launchpic4.jpg';
import launchpic5 from './images/launchpic5.jpg';
import launchpic6 from './images/launchpic6.jpg';
import launchpic7 from './images/launchpic7.jpg';

const slidesData = [
  { image: BeliefSat0Launch },
  { image: BeliefSat0 },
  { video: 'https://www.youtube.com/embed/3Swjlq9hlrM' },
  { image: img1 },
  { image: img2 },
  { video: 'https://www.youtube.com/embed/CT-K4qLuNTo' },
  { image: testing },
  { image: img3 },
  { image: shindesir },
  { image: img4 },
  { image: img5 },
  { video: 'https://www.youtube.com/embed/0WILY1JaI8I' },
  { image: launchpic1 },
  { image: launchpic2 },
  { image: launchpic3 },
  { image: launchpic4 },
  { image: launchpic5 },
  { image: launchpic6 },
  { image: launchpic7 },
];


const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000); // Auto-scroll every 4s
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  return (
<div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
  <div className="slide" key={index}>
    <div className="content">
      <div id="blockLeft">
        <div id="imageContainerLeft">
          {slide.image ? (
            <img src={slide.image} id="image" alt="Slide" />
          ) : slide.video ? (
            <iframe
            id='iframe'
              
              src={slide.video}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          ) : null}
        </div>
      </div>
    </div>
  </div>
))}

      </div>
      <button id="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button id="next" onClick={nextSlide}>
        &#10095;
      </button>
    

    </div>
  );
};

export default AutoSlider;



//  <div className="slider">
//       <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {slidesData.map((slide, index) => (
//   <div className="slide" key={index}>
//     <div className="content">
//       <div id="blockLeft">
//         <div id="imageContainerLeft">
//           {slide.image ? (
//             <img src={slide.image} id="image" alt="Slide" />
//           ) : slide.video ? (
//             <iframe
//               width="100%"
//               height="100%"
//               src={slide.video}
//               title="YouTube video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               referrerPolicy="strict-origin-when-cross-origin"
//             ></iframe>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   </div>
// ))}

//       </div>
//       <button id="prev" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <button id="next" onClick={nextSlide}>
//         &#10095;
//       </button>
    

//     </div>