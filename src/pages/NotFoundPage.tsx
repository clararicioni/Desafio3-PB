import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-poppins px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-yellowPrimary font-bold mb-6 text-center">
        404 - Page not found
      </h1>
      <section className="text-2xl text-black font-bold text-center mb-10">
        We are working on new features
      </section>
      <div className="max-w-full sm:max-w-2xl lg:max-w-lg">
        <Splide
          options={{
            type: "loop",
            pagination: true,
            autoplay: true,
          }}
        >
          <SplideSlide>
            <img
              src="sadchair1.png"
              alt="sad chair"
              className="rounded-md w-full"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="sadchair2.png"
              alt="sad chair"
              className="rounded-md w-full"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="sadchair3.png"
              alt="sad chair"
              className="rounded-md w-full"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-10 mt-8">
        <Link
          to="/"
          className="text-2xl text-black font-bold border-b border-black
          hover:text-blue-800 hover:border-blue-800 text-center w-full sm:w-auto"
        >
          Go back to home
        </Link>
        <Link
          to="/shop"
          className="text-2xl text-black font-bold border-b border-black
          hover:text-green-800 hover:border-green-800 text-center w-full sm:w-auto"
        >
          See our products
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
