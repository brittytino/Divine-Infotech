import React from 'react';
import thirdImg from '../images/3.avif';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';


const programmingLanguages = ['C Programming', 'C++', 'Java', 'Python'];

const CTAcodemaster = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/codemaster-bootcamp');
        // window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return(
        <div className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
             {/* Solution Section */}
      <div className="py-16   text-white relative overflow-hidden">
        <div className="container  text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-400 mb-8">
            The CodeMaster Bootcamp: Your Path to Mastery
          </h2>
          <p className="text-xl mb-6">Master C, C++, Java, and Python in just a few weeks!</p>

          {/* Placeholder for Success Image */}
          <div className="w-64 h-64 bg-gray-200 rounded-full shadow-lg mx-auto overflow-hidden mb-8">
            <img
              src={thirdImg}
              alt="Success Story"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Programming Language Cards */}
          <div className="flex justify-center space-x-2 md:space-x-8">
            {programmingLanguages.map((language, idx) => (
              <motion.div
                key={idx}
                
                className="hover:bg-transparent hover:text-white text-gray-800 cursor-pointer font-medium py-2 px-2 rounded-lg bg-white shadow-md border-2 border- pink-400 transition duration-300"
              >
                {language}
              </motion.div>
            ))}
          </div>

          {/* CTA Button with Price */}
          <motion.a
            href="/codemaster-bootcamp"
            // onClick={handleNavigation}
            whileHover={{ scale: 1 }}
            className="mt-10 inline-block bg-yellow-400 text-black font-bold py-3 px-4 md:py-4 md:px-8 rounded-full shadow-lg transition-all hover:bg-yellow-500"
          >
            Join Now or Worry Later !
          </motion.a>

          {/* Countdown Timer for Urgency */}
          <div className="mt-6">
            <p className="text-lg text-red-500 font-bold">Hurry! Offer ends in:</p>
            <p className="text-3xl font-bold">2 Days 14 Hours</p>
          </div>
        </div>

        {/* Subtle Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#0f172a] opacity-20 pointer-events-none animate-pulse"></div>
      </div>
        </div>
    )
}

export default CTAcodemaster