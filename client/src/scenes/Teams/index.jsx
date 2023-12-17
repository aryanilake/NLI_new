// Teams.js
import React, { useState } from "react";
import Button from "../../components/Button";
import CardSlider from "../../components/CardSlider";



function Teams() {
  const [selectedLabel, setSelectedLabel] = useState("Beliefsat-1");

  const handleButtonClick = (label) => {
    // console.log(`Clicked: ${label}`);
    setSelectedLabel(label);
  };
  const images = [
    "https://media.istockphoto.com/id/529249803/photo/background-from-leaves-of-bright-green-color.jpg?s=612x612&w=0&k=20&c=K1kzf35nuyNzBVbtfF81jdWqem7W_nqYZJfrAJCAm5o=",
    "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=",
    "https://images.unsplash.com/photo-1700819083576-edbdde9e16c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA==",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA==",
    "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_640.jpg",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA==",
    "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/529249803/photo/background-from-leaves-of-bright-green-color.jpg?s=612x612&w=0&k=20&c=K1kzf35nuyNzBVbtfF81jdWqem7W_nqYZJfrAJCAm5o=",
    "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=612x612&w=0&k=20&c=I16c_ZzQHEeGoPUVrVP9pPusSzsmymvVKdQVgPuVdDo=",
    "https://images.unsplash.com/photo-1700819083576-edbdde9e16c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA==",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA==",
    "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_640.jpg",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA==",
    "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/529249803/photo/background-from-leaves-of-bright-green-color.jpg?s=612x612&w=0&k=20&c=K1kzf35nuyNzBVbtfF81jdWqem7W_nqYZJfrAJCAm5o=",
    "https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0",
   
  ];

  return (
    <div className="font-poppins justify-between items-center h-24 max-w-[1240px] mx-auto px-5 mt-5 mb-9">
      <div className="space-x-4">
        <Button
          onClick={() => handleButtonClick("Beliefsat-1")}
          label="Beliefsat-1"
          type="button"
          isActive={selectedLabel === "Beliefsat-1" ? true : false}
        />
        <Button
          onClick={() => handleButtonClick("Beliefsat-2")}
          label="Beliefsat-2"
          type="button"
          isActive={selectedLabel === "Beliefsat-2" ? true : false}
        />
        <Button
          onClick={() => handleButtonClick("Avruti")}
          label="Avruti"
          type="button"
          isActive={selectedLabel === "Avruti" ? true : false}
        />
      </div>
      <div className="results m-4">
        {/* {selectedLabel && <p>Selected Button: {selectedLabel}</p>} */}

        <CardSlider images={images}/>
      </div>
    </div>
  );
}

export default Teams;
