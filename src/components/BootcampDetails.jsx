import React from 'react';
import { FaCogs, FaRocket, FaMedal } from 'react-icons/fa';
import { CgCodeSlash } from "react-icons/cg";
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    id: 1,
    icon: <FaCogs className="text-4xl text-orange-500 mx-auto" />,
    title: 'Step 1',
    description: 'Master the fundamentals: learn essential programming concepts, logical thinking, and problem-solving skills.',
    languages: 'C, C++',
  },
  {
    id: 2,
    icon: <FaRocket className="text-4xl text-green-500 mx-auto" />,
    title: 'Step 2',
    description: 'Build real-world projects: apply your knowledge to develop practical apps and build portfolio-worthy projects.',
    languages: 'Java, Python',
  },
  {
    id: 3,
    icon: <FaMedal className="text-4xl text-yellow-500 mx-auto" />,
    title: 'Step 3',
    description: 'Career-ready: master advanced techniques, prep for interviews, and gain the confidence to secure your dream job.',
    languages: 'C, C++, Java, Python',
  },
];

const BootcampDetails = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2,  // Slightly longer duration for smoothness
        ease: 'easeInOut',  // Smoother easing function
        staggerChildren: 0.3,  // Smoothly stagger each card
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,  // Slightly slower transition per item
        ease: 'easeInOut', 
      },
    },
  };

  return (
    <div ref={ref} className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-white py-16  lg:px-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold flex gap-2 justify-center items-center text-gray-900">
            <CgCodeSlash /> Zero to Hero <CgCodeSlash />
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We take you from zero experience to mastering the four most popular languages.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-4 lg:gap-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="bg-white p-4 md:p-2 lg:p-8 rounded-md shadow-xl border border-[#00091d] transition duration-300"
              variants={itemVariants}
            >
              <div className="text-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
              <div className="mt-6 text-blue-600">
                <span className="block font-semibold">Languages:</span> {step.languages}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
        <a href="#code-footer">  <button className="bg-[#00091d] text-white py-3 px-8 rounded-full hover:bg-transparent border-2 border-[#00091d] hover:text-[#00091d] font-semibold transition duration-300">
            Start Your Journey Now
          </button></a>
        </div>
      </div>
      
    </div>
  );
};

export default BootcampDetails;
