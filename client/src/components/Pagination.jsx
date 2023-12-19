import React from 'react';

const Pagination = ({ currentPage, imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  const back = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="flex bg-[#fafaf9] rounded-lg font-[Poppins] w-full items-center m-5">
      <button
        onClick={back}
        className="h-12 border-2 border-r-0 border-black px-4 rounded-l-lg hover:bg-black hover:text-white"
       
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </button>
      {pageNumbers.map((pageNumber, i) => (
        <button
          key={i}
          onClick={() => paginate(pageNumber)}
          className={`h-12 border-2 border-r-0 border-black w-12 ${pageNumber === currentPage ? 'bg-black text-white' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={next}
        className="h-12 border-2 border-black px-4 rounded-r-lg hover:bg-black hover:text-white"
        disabled={currentPage === pageNumbers.length}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;


// <ul className="pagination flex flex-row items-center">
// {pageNumbers.map(number => (
//     <li key={number} className="page-item ">
//       <button
//         onClick={() => paginate(number)}
        
//         className={`page-link ${number === currentPage ? 'text-black' : 'text-gray-500'}  h-14 border-2`}
//       >
//         {number}
//       </button>
//     </li>
//   ))}
// </ul>
