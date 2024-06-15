import React from 'react';

const Filter = () => {
  return (
    <div className="bg-salmonCheckout w-full h-100px flex flex-col md:flex-row items-center
     justify-between font-poppins mb-20">
      <div className="flex items-center gap-5">
        <button><img src="filtericon.png" alt="" className="ml-0 md:ml-20" /></button>
        <section className="text-20px ml-2 md:ml-0">Filter</section>
        <button><img src="filtercolumn.png" alt="" className="ml-2" /></button>
        <button><img src="filter2.png" alt="" className="ml-2" /></button>
        <img src="pipe.png" alt="" className="ml-2" />
        <section className="text-1xl text-black mt-2 md:mt-0">Showing 1–16 of 32 results</section>
      </div>
      
      <div className="flex items-center mt-4 md:mt-0 mr-28">
        <section className="mr-3 md:mr-4">Show</section>   
        <input type="number" value="16" className="p-2 max-w-12 outline-none text-grayText" />
        <section className="ml-2 md:ml-4 mr-3">Short by</section>
        <input type="text" value="Default" className="p-2 max-w-32 outline-none text-grayText" />
      </div>
    </div>  
  );
};

export default Filter;
