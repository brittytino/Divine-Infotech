import React from 'react';
import { FiUserCheck, FiCode, FiDollarSign, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WhyChooseDivineInfotech = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Divine Infotech?</h2>
          <p className="mt-2 text-lg text-gray-600">Transform your future with Divine Infotech. Enroll now and take the first step towards a successful career in tech!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-500">
              <FiUserCheck className="text-3xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Expert Faculty</h3>
            <p className="mt-2 text-base text-gray-600">Learn from industry professionals with hands-on experience.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-500">
              <FiCode className="text-3xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Practical Training</h3>
            <p className="mt-2 text-base text-gray-600">Hands-on projects and real-world applications.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-500">
              <FiDollarSign className="text-3xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Affordable Pricing</h3>
            <p className="mt-2 text-base text-gray-600">Competitive rates and flexible payment options.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-500">
              <FiBriefcase className="text-3xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Career Support</h3>
            <p className="mt-2 text-base text-gray-600">Job placement assistance and career counseling.</p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mr-4">
            Enroll Now
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDivineInfotech;
