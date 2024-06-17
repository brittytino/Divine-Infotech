import React from 'react';
import { FiUserCheck, FiCode, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const WhyChooseDivineInfotech = () => {
  // Data for each feature
  const features = [
    {
      Icon: FiUserCheck,
      color: 'text-blue-500',
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with hands-on experience.',
    },
    {
      Icon: FiCode,
      color: 'text-green-500',
      title: 'Practical Training',
      description: 'Hands-on projects and real-world applications.',
    },
    {
      Icon: FiDollarSign,
      color: 'text-yellow-500',
      title: 'Affordable Pricing',
      description: 'Competitive rates and flexible payment options.',
    },
    {
      Icon: FiBriefcase,
      color: 'text-purple-500',
      title: 'Career Support',
      description: 'Job placement assistance and career counseling.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-gray-900">
            Why Choose <span className="text-yellow-600">Divine Infotech?</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600">
            Transform your future with Divine Infotech. Enroll now and take the first step towards a successful career in tech!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col items-center justify-center">
              <div className={`flex items-center justify-center h-16 w-16 rounded-full ${feature.color} bg-${feature.color.split('-')[1]}-100 mb-4`}>
                <feature.Icon className="text-3xl md:text-4xl" />
              </div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base hidden md:block text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
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
