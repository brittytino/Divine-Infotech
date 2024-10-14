import React from 'react';
import { motion } from 'framer-motion';
import firstImg from '../images/1.jpg';
import secondImg from '../images/2.jpeg';




const PainAgitateSolution = () => {
  return (
    <div>
      {/* Fear Section */}
      <div className="relative py-16 bg-black">
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
            <h2 className="text-5xl font-bold italic tracking-wider">
              Are You Getting Left Behind?
            </h2>
            <p className="text-xs md:text-lg leading-8 text-gray-200">
            Are you watching your classmates and friends ace their programming assignments while you struggle to even start? 
            </p>
            <p className="text-xs md:text-lg leading-8 text-gray-200">
              Worried about your future career in this tech-driven world?
            </p>
          </div>
        </div>
      </div>

      {/* Agitate Section */}
     

     
    </div>
  );
};

export default PainAgitateSolution;
