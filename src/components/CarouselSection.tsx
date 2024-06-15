import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = () => {
  return (
    <div className="bg-salmonHome flex flex-row justify-center font-poppins text-darkGrayText w-full mt-10 relative">
      <div className="flex flex-col mt-52">
        <section className="font-bold text-40px max-w-500px leading-tight">
          50+ Beautiful rooms inspiration
        </section>
        <section className="font-medium text-1xl text-grayText5 max-w-368px mt-3">
          Our designers have created many beautiful room prototypes to inspire
          you.
        </section>
        <button className="flex justify-center font-semibold bg-yellowPrimary p-5 max-w-176px max-h-12 items-center text-white text-1xl hover:opacity-75 mt-8">
          Explore More
        </button>
      </div>

      <div className="relative m-10">
        <img src="splideinit.png" alt="" className="w-52 object-cover" />
        <div className="absolute inset-0 flex items-end justify-end p-5">
          <img src="arrowyellow.png" alt="yellow arrow" />
        </div>
      </div>

      <div className="max-w-48 ml-8">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src="splide1.png" alt="slide 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="splide2.png" alt="slide 2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
