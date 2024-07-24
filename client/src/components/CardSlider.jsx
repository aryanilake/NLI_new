import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { getAllmembers } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const CardSlider = ({ label }) => {
  const navigate = useNavigate();

  const handleButtonClick = (image) => {
    navigate("/newpage", { state: image });
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllmembers();
        console.log(result);
        const newRows = result.data
          .filter(
            (item) =>
              label === item.project1 ||
              label === item.project2 ||
              label === item.project3
          )

          .map((item) => ({
            fname: item.fname,
            lname: item.lname,
            YearLeft: item.yearleft,
            Domain: item.domain,
            Active: item.active,
            Linkedin: item.linkedin,
            profile: item.profile,
            About: item.about,
            College: item.departmentclg,
            project1: item.project1,
            project2: item.project2,
            project3: item.project3,
            email: item.email,
          }));

        setImages(newRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [label]);

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(images);

  return (
    <div className="flex flex-col items-center mb-10 h-max">
      <div className="mb-4">
        <Pagination
          currentPage={currentPage}
          imagesPerPage={imagesPerPage}
          totalImages={images.length}
          paginate={paginate}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 gap-4">
        {currentImages.map((image) => (
          <div className="relative group w-full">
            <img
              src={image.profile}
              className="h-80 w-full object-cover rounded"
            />
            <div className="rounded bg-gradient-to-b from-black via-black to-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bottom-0 p-4">
              <div className="info  mt-2 items-start flex ">
                {image.YearLeft == 0 ? null : (
                  <span className="border border-[#8c8c73] text-[#8c8c73] px-4 py-2  rounded-full font-[Poppins] mb-2">
                    {image.YearLeft}
                  </span>
                )}

                <span className="border border-[#8c8c73] text-[#8c8c73] px-4 py-2 mr-2 rounded-full font-[Poppins] mb-2">
                  {image.Domain}
                </span>
              </div>
              <div className="name">
                <h1 className="ml-2 text-2xl font-[Poppins] text-white">
                  {image.fname} {image.lname}
                </h1>
              </div>
              <div className="end ml-2 flex">
                <button
                  onClick={() => handleButtonClick(image)}
                  className="bg-[#d1d1d7] text-black px-4 py-2 rounded mt-2"
                >
                  Learn More
                </button>
                <button className="w-8 h-10 flex items-center justify-center ml-4 mt-2">
                  <a
                    href={image.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19 18"
                      className="w-6 h-6"
                      fill="rgb(149, 157, 165)"
                    >
                      <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
