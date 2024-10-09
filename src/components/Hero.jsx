import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Home from '../images/hero img.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`px-6 bg-[#fafafc] lg:px-12 lg:pl-28 mt-4 md:mt-20 pt-12 lg:flex transition-all duration-1000 ${isLoaded ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'}`}>
      {/* Left */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl lg:text-5xl md:mt-2 text-[#0d0c13] font-semibold" style={{ lineHeight: '1.4' }}>
          Elevate Your Career with <br />
          <span>
            <span className="text-red-600">Divine Infotech</span>
          </span>
        </h1>
        <p className="text-xs md:text-base text-[#4f4f4f] mt-4 mb-3 md:mb-0 max-w-full">
          Welcome to Divine Infotech, your ultimate destination for top-notch offline and online internships and valuable courses. Our goal is to empower you with the skills and knowledge needed to thrive in today’s competitive job market.
        </p>
        <div className="md:gap-5 gap-3 flex flex-row mt-12 md:mb-10 transition-all">
          <button className="bg-[#fe0000] transition-all flex items-center justify-center hover:bg-transparent text-white border-2 border-[#fe0000] hover:text-[#fe0000] py-2 px-4 md:py-3 md:px-6 text-base md:text-xl font-medium rounded-md">
            <a href="#courses"> <span className="flex items-center gap-2">
              Explore Courses <GoArrowUpRight className="text-xl  lg:text-2xl font-bold" />
            </span></a>
          </button>
          <a href="#footer"> <button className="rounded-md border-2 transition-all text-[#fe0000] bg-transparent py-2 px-4 md:py-3 md:px-6 text-base md:text-xl font-medium hover:border-red-600 hover:text-red-600">
            Contact Us
          </button></a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 mt-10 md:mt-5 lg:pl-6 lg:pr-2">
        <img src={Home} alt="Learning" className="md:h-[600px] lg:w-[1000px] lg:-mt-32 transition-all duration-1000 ease-in-out" style={{ opacity: isLoaded ? 1 : 0 }} />
      </div>
    </div>
  );
};

export default Hero;
