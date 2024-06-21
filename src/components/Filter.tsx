import React, { useState, useEffect } from "react";

interface FilterProps {
  productsPerPage: number;
  totalResults: number;
  currentPage: number;
  onPageChange: (value: number) => void;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  showOnlyDiscounted: boolean;
  setShowOnlyDiscounted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({
  productsPerPage,
  totalResults,
  currentPage,
  onPageChange,
  sortBy,
  setSortBy,
  showOnlyDiscounted,
  setShowOnlyDiscounted,
}) => {
  const [showValue, setShowValue] = useState<number>(productsPerPage);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const handleShowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setShowValue(value);

    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      onPageChange(value);
    }, 1000);

    setTimer(newTimer);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
  };

  const handleShowOnlyDiscountedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    setShowOnlyDiscounted(checked);
  };

  return (
    <div
      className="bg-salmonCheckout w-full h-100px flex flex-col md:flex-row items-center 
    justify-between font-poppins mb-20 relative select-none"
    >
      <div className="flex items-center gap-5">
        <button onClick={toggleFilter}>
          <img src="filtericon.png" alt="" className="ml-0 md:ml-20 hover:scale-125 transition duration-100" />
        </button>
        <section className="text-20px ml-2 md:ml-0">Filter</section>
        <button>
          <img src="filtercolumn.png" alt="" className="ml-2 hover:scale-125 transition duration-100" />
        </button>
        <button>
          <img src="filter2.png" alt="" className="ml-2 hover:scale-125 transition duration-100" />
        </button>
        <img src="pipe.png" alt="" className="ml-2" />
        <section className="text-1xl text-black mt-2 md:mt-0">
          Showing {(currentPage - 1) * productsPerPage + 1}–
          {Math.min(currentPage * productsPerPage, totalResults)} of{" "}
          {totalResults} results
        </section>
      </div>

      {filterOpen && (
        <div className="absolute bg-white shadow-lg p-4 mt-2 rounded-md w-64 left-0 z-10 filter-popup top-full ml-0 md:ml-20">
          <div className="flex items-center mb-2">
            <label htmlFor="sortBy" className="mr-2 font-bold">
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="p-2 outline-none bg-gray-100 rounded-md"
            >
              <option value="default">Default</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="lowhigh">Low to High</option>
              <option value="highlow">High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="discount"
              checked={showOnlyDiscounted}
              onChange={handleShowOnlyDiscountedChange}
              className="mr-2"
            />
            <label htmlFor="discount">Show only discounted products</label>
          </div>
        </div>
      )}

      <div className="flex items-center mt-4 md:mt-0 mr-28">
        <section className="mr-3 md:mr-4">Show</section>
        <input
          type="number"
          value={showValue}
          onChange={handleShowChange}
          placeholder={`Show ${showValue} items`}
          className="p-2 max-w-16 outline-none text-grayText"
        />
        <section className="ml-2 md:ml-4 mr-3">Short by</section>
        <input
          type="text"
          value={
            sortBy === "default"
              ? "Default"
              : sortBy === "az"
              ? "A-Z"
              : sortBy === "za"
              ? "Z-A"
              : sortBy === "lowhigh"
              ? "Low to High"
              : sortBy === "highlow"
              ? "High to Low"
              : "Default"
          }
          readOnly
          className="p-2 max-w-32 outline-none text-grayText cursor-default"
        />
      </div>
    </div>
  );
};

export default Filter;
