import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled down
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    // Scroll back to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Show the button only when showButton is true */}
      {showButton && (
        <button
          onClick={handleBackToTop}
          className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1"
        >
          <span className="font-extrabold uppercase hover:font-black duration-200">
            Back To Top
          </span>
          <span className="group-hover:-translate-y-3 duration-300 ease-in-out">
            <svg
              class="-rotate-90"
              width="24"
              height="24"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <g clip-path="url(#clip0_238_1313)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                  fill="url(#paint0_linear_238_1313)"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_238_1313"
                  x1="14"
                  y1="26"
                  x2="179"
                  y2="179.5"
                  gradientUnits="userSpaceOnUse"
                >
                  
                  <stop stop-color="#D1D1C7"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
