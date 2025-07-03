import React, { useEffect, useRef, useState } from 'react';
// import './AutoSlider.css'; // For styling
import './styles.css'
// import CircularGallery from './CircularGallery'
const slidesData = [
  { image: 'http://localhost:5173/src/assets/BeliefSat-0%20Launch.jpg' },
  { image: 'http://localhost:5173/src/assets/BeliefSat-0.jpg' },
  { video: 'https://www.youtube.com/embed/3Swjlq9hlrM' }, // 👈 YouTube video
  { image: './src/scenes/Slider/images/img1.jpeg' },
  { image: './src/scenes/Slider/images/img2.jpeg' },
  { video: 'https://www.youtube.com/embed/CT-K4qLuNTo' }, // 👈 YouTube video
  { image: './src/scenes/Slider/images/testing.jpg' },
  { image: './src/scenes/Slider/images/img3.jpeg' },
  { image: './src/scenes/Slider/images/shindesir.jpg' },
  { image: './src/scenes/Slider/images/img4.jpeg' },
  { image: './src/scenes/Slider/images/img5.jpeg' },
  { video: 'https://www.youtube.com/embed/0WILY1JaI8I' }, // 👈 YouTube video
  { image: './src/scenes/Slider/images/launchpic1.jpg' },
  { image: './src/scenes/Slider/images/launchpic2.jpg' },
  { image: './src/scenes/Slider/images/launchpic3.jpg' },
  { image: './src/scenes/Slider/images/launchpic4.jpg' },
  { image: './src/scenes/Slider/images/launchpic5.jpg' },
  { image: './src/scenes/Slider/images/launchpic6.jpg' },
  { image: './src/scenes/Slider/images/launchpic7.jpg' },
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