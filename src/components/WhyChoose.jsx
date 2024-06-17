import React from 'react';
import { FiUserCheck, FiCode, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const WhyChooseDivineInfotech = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-gray-900">Why Choose <span className=' text-yellow-600'>Divine Infotech?</span> </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600">
            Transform your future with Divine Infotech. Enroll now and take the first step towards a successful career in tech!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-blue-100 text-blue-500">
              <FiUserCheck className="text-2xl md:text-3xl" />
            </div>
            <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">Expert Faculty</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">Learn from industry professionals with hands-on experience.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-green-100 text-green-500">
              <FiCode className="text-2xl md:text-3xl" />
            </div>
            <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">Practical Training</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">Hands-on projects and real-world applications.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-yellow-100 text-yellow-500">
              <FiDollarSign className="text-2xl md:text-3xl" />
            </div>
            <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">Affordable Pricing</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">Competitive rates and flexible payment options.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full bg-purple-100 text-purple-500">
              <FiBriefcase className="text-2xl md:text-3xl" />
            </div>
            <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">Career Support</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">Job placement assistance and career counseling.</p>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg mr-4">
            Enroll Now
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg">
            Contact Us 
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDivineInfotech;
