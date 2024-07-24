import React from "react";

function Foundercard({ imageUrl, title, size }) {
  return (
    <div>
      <div className="max-w-[50vh]  rounded overflow-hidden mx-3 ">
        <img className="w-full h-[50vh]" src={imageUrl} alt={title} />
        <div className="px-10 py-4">
          <div className="font-semivold text-2xl px- mb-2">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Foundercard;
