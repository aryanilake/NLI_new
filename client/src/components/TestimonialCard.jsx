import React from 'react';

const TestimonialCard = ({ text, author, company }) => {
  return (
    <div className="bg-white p-10 px-20 bg-transparent flex flex-col justify-center  rounded shadow">
      <p className="text-[#262626] text-3xl font-bold">"{text}"</p>
      <div className="">
        <p className="text-gray-500 text-2xl">{company}</p>
        <p className="text-2xl font-semibold ">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
