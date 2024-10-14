import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ items, marginX = 'mx-6' }) => { // Default mx value if not passed
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`flex items-center text-[10px] md:text-sm ${marginX} mb-4`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p 
            onClick={() => !item.isActive && handleNavigation(item.link)} 
            className={`font-medium cursor-pointer transition duration-200 ${item.isActive ? 'text-yellow-500' : 'text-gray-600 hover:text-gray-300'}`}
          >
            {item.label}
          </p>
          {index < items.length - 1 && <FaChevronRight className='md:mx-2 mx-1 text-gray-500' />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
