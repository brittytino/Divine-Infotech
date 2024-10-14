import React from 'react';
import { motion } from 'framer-motion';
import firstImg from '../images/1.jpg';
import secondImg from '../images/2.jpeg';

import { FaChevronDown } from "react-icons/fa";



const PainAgitateSolution = () => {
  return (
    <div>
      {/* Fear Section */}
      <div className="relative pt-16 pb-8 bg-black">
        <div className="container flex items-center justify-center flex-col space-y-6">
          {/* Placeholder for Fear Image */}
          <div className="w-64 h-64 bg-gray-200 rounded-full shadow-lg overflow-hidden">
            <img
              src={firstImg}
              alt="Feeling Left Out"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center text-white">
            <h2 className="md:text-5xl text-3xl font-bold italic tracking-wider">
              Are You Getting Left Behind?
            </h2>
            <p className="text-xs md:text-lg leading-4 mt-3 text-gray-400 max-w-2xl px-4">
            Are you watching your classmates and friends ace their programming assignments while you struggle to even start?  Worried about your future career in this tech-driven world?
            </p>
      
          </div>
        </div>
        <p className='text-center flex justify-center items-center text-gray-400 hover:text-gray-300 gap-2 mt-8 '>Scroll Down <FaChevronDown />
      </p>
      </div>

      {/* Agitate Section */}
     

     
    </div>
  );
};

export default PainAgitateSolution;
