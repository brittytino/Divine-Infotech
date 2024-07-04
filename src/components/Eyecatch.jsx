// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaUserCheck, FaMobileAlt } from 'react-icons/fa';
import img1 from '../images/Student-linker-final-1536x861.png';

const Eyecatch = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row items-center  bg-blue-600 p-8"
    >
      <div className="flex-1 flex justify-center mb-8 lg:mb-0">
        <motion.img
          src={img1}
          alt="Website Display"
          className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div 
        className="flex-1 py-6 text-white text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold md:font-bold mb-4">
          We create eye-catching websites for just Rs. 5999/-
        </h1>
        <p className="mb-8 text-sm md:text-base ">
          Our websites are not only visually stunning but also interactive and responsive.
          Whether you're running a personal blog, an online store, managing a corporate entity,
          or need a custom web application, we've got you covered with our all-in-one solution.
          Whether your goal is to engage visitors or showcase products, we've got the expertise to make your website shine.
        </p>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-5 py-3 rounded-sm border-2 border-white text-white font-medium hover:text-blue-600 hover:bg-white  transition">
            <FaLaptopCode className="inline-block mr-2" />
            UI/UX DESIGN
          </button>
          <button className="px-5 py-3 rounded-sm border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition">
            <FaUserCheck className="inline-block mr-2" />
            USER FRIENDLY
          </button>
          <button className="px-5 py-3 rounded-sm border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition">
            <FaMobileAlt className="inline-block mr-2" />
            RESPONSIVENESS
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Eyecatch;
