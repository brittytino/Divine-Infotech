import React from 'react';
import { FiUsers, FiMonitor, FiAward } from 'react-icons/fi';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <FiUsers className="text-3xl md:text-4xl text-blue-500" />,
      title: 'Faculty',
      description: 'Our experienced instructors are industry veterans with a passion for teaching. They bring real-world insights and practical knowledge to every course, ensuring you get the best education possible.',
      bgClass: 'bg-gradient-to-r from-blue-200 to-blue-100',
    },
    {
      icon: <FiMonitor className="text-3xl md:text-4xl text-purple-500" />,
      title: 'Infrastructure',
      description: 'Our state-of-the-art facilities provide the perfect environment for learning and innovation. Equipped with the latest technology and tools, our classrooms and labs are designed to enhance your educational experience.',
      bgClass: 'bg-gradient-to-r from-purple-200 to-purple-100',
    },
    {
      icon: <FiAward className="text-3xl md:text-4xl text-yellow-500" />,
      title: 'Support',
      description: 'At Divine Infotech, we are committed to your success. Our support services include career counseling, job placement assistance, and continuous learning opportunities to help you stay ahead in your career.',
      bgClass: 'bg-gradient-to-r from-yellow-200 to-yellow-100',
    },
  ];

  return (
    <div className="bg-gray-100 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 md:p-6 shadow-md overflow-hidden ${advantage.bgClass}`}
          >
            <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg">
              {advantage.icon}
            </div>
            <div className="mt-6 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{advantage.title}</h3>
              <p className="mt-2 md:mt-4 text-sm lg:text-base text-gray-800">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
