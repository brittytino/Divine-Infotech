import React from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaGraduationCap, FaRocket, FaMedal } from 'react-icons/fa';


const WhyJoinBootcamp = () => {
  return (
    <section className="py-16 md:py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className=" text-2xl md:text-4xl font-bold text-gray-200">Why Join CodeMaster Bootcamp?</h2>
          <p className="text-sm md:text-lg text-gray-400 mt-4">
            Unlock your potential with the ultimate programming experience. Here’s why you shouldn’t miss out:
          </p>
        </div>

        {/* Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaThumbsUp className="text-white text-3xl" />}
            title="Beginner-Friendly"
            iconColor="bg-blue-600"
          />

          <FeatureCard
            icon={<FaGraduationCap className="text-white text-3xl" />}
            title="Learn from Industry Experts"
            iconColor="bg-yellow-500"
          />

          <FeatureCard
            icon={<FaRocket className="text-white text-3xl" />}
            title="Boost Your Confidence"
            iconColor="bg-green-500"
          />

          <FeatureCard
            icon={<FaMedal className="text-white text-3xl" />}
            title="Unlock Future Opportunities"
            iconColor="bg-orange-500"
          />
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
            Join the Bootcamp Now
          </button>
        </div> */}
     
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, iconColor }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6"
    >
      {/* Icon Circle */}
      <div className={`flex items-center justify-center w-32 h-32 rounded-full ${iconColor} text-white mb-4`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center text-center">
        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
      </div>
    </motion.div>
    
  );
};

export default WhyJoinBootcamp;
