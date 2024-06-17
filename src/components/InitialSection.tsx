import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type InitialSectionProps = {
  pageName: string;
};

const InitialSection: React.FC<InitialSectionProps> = ({ pageName }) => {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  return (
    <div className="relative font-poppins pt-28">
      <div className="w-full bg-cover bg-center h-96 sm:h-80 md:h-96 lg:h-120"
           style={{ backgroundImage: 'url(section1-shop.png)' }}>
        <div className="flex flex-col justify-center items-center text-center h-full px-6 sm:px-8 md:px-12 lg:px-16">
          <img src="logo.png" className="w-20" alt="logo" />
          <h1 className="text-5xl font-medium text-black mb-4">{pageName}</h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <Link to="/">
              <span className="font-medium text-black text-base sm:text-lg hover:underline">
                Home
              </span>
            </Link>
            <span className="font-medium text-black text-base sm:text-lg">
              {">"}
            </span>
            <span className="font-light text-base sm:text-lg">{pageName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialSection;
