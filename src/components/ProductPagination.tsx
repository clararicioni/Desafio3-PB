import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pagesToShow = 3;
    const pageNumbers: number[] = [];

    let start = currentPage - Math.floor(pagesToShow / 2);
    start = Math.max(start, 1);

    let end = start + pagesToShow - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - pagesToShow + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-14 font-poppins mb-14">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-salmonCheckout text-black rounded-10px disabled:opacity-50 hover:bg-grayText4"
      >
        Previous
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? "bg-yellowPrimary text-white"
              : "bg-salmonCheckout text-black hover:bg-grayText4"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-salmonCheckout text-black rounded disabled:opacity-50 hover:bg-grayText4"
      >
        Next
      </button>
    </div>
  );
};

export default ProductPagination;
