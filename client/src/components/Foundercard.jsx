import React from "react";

function Foundercard({ imageUrl, title, size }) {
  return (
    <div>
      <div className="w-[40vh]  rounded overflow-hidden mx-4 ">
        <img className="w-full h-[55vh]" src={imageUrl} alt={title} />
        <div className="px-15 py-4">
          <div className="font-semivold text-2xl px- mb-2">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Foundercard;
