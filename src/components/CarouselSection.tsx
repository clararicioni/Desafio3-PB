import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const roomPrototypes = [
  { id: 1, name: "SPLIDE 1", image: "splide1.png" },
  { id: 2, name: "SPLIDE 2", image: "splide2.png" },
  { id: 3, name: "SPLIDE 3", image: "splide3.png" },
  { id: 4, name: "SPLIDE 4", image: "splide4.png" },
];

const CarouselSection = () => {
  return (
    <div className="bg-salmonHome flex flex-col md:flex-row justify-center items-center font-poppins text-darkGrayText w-full mt-10 relative">
      <div className="flex flex-col md:mt-52 md:mr-10">
        <section className="font-bold text-4xl lg:max-w-xs md:max-w-500px lg:text-start md:text-center lg:leading-tight
         md:leading-normal sm:text-center sm:max-w-lg sm:justify-center sm:mt-10">
          50+ Beautiful rooms inspiration
        </section>
        <section className="font-medium text-lg text-grayText5 max-w-md mt-3 mb-5 text-center md:text-left">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </section>
        <button className="flex justify-center font-semibold bg-yellowPrimary p-3 md:p-5 lg:max-w-176px max-h-12 items-center text-white text-lg hover:opacity-75 sm:max-w-md">
          Explore More
        </button>
      </div>

      <div className="relative mt-10 md:mt-0">
        <img src="splideinit.png" alt="splide init" className="mt-10 mb-10" />
        <div className="absolute inset-5 mb-8 flex flex-row justify-start items-end p-6">
          <div className="bg-white opacity-80 p-6 max-w-56 items-center flex flex-col justify-center">
            <section className="opacity-100 text-lg font-medium text-grayText5">
              01 - Bed Room
            </section>
            <section className="text-3xl font-semibold text-black">
              Inner Peace
            </section>
          </div>
          <img
            src="arrowyellow.png"
            alt="yellow arrow"
            className="max-h-10 ml-2 md:ml-0"
          />
        </div>
      </div>

      <div className="hidden lg:block max-w-372px max-h-400px mt-10 md:mt-0">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            pagination: true,
            autoplay: true,
          }}
        >
          {roomPrototypes.map((room) => (
            <SplideSlide key={room.id}>
              <img
                src={room.image}
                alt={room.name}
                className="max-w-372px max-h-400px"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="lg:hidden max-w-full mt-10 md:mt-0">
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            pagination: true,
            autoplay: true,
            breakpoints: {
              768: {
                perPage: 2,
              },
            },
          }}
        >
          {roomPrototypes.map((room) => (
            <SplideSlide key={room.id}>
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CarouselSection;
