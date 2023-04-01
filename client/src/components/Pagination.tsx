import React from 'react';
interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageChange = (page: number) => {
      onPageChange(page);
    };
  

    return (
<div className="flex items-center justify-center mx-auto w-full my-10">
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${
                page === currentPage ? "bg-primary text-white" : "bg-white text-primary"
              } rounded-md py-1 px-2`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Pagination;