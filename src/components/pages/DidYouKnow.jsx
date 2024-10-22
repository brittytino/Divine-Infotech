import React from 'react';
import salaryImg from './img/salaryImg.png';

const DidYouKnow = ({salary}) => {
  return (
    
    <div className="lg:mx-40  mx-4 my-10 lg:w-3/5 rounded-lg overflow-hidden relative">
      {/* Container with background image */}
      <div 
        className="rounded-lg overflow-hidden relative md:h-[250px] h-[150px]"
        style={{ 
          backgroundImage: `url(${salaryImg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          // Set an explicit height for the background image
        }}
      >
        {/* Text content, absolutely positioned over the image */}
        <div className="absolute inset-0 p-6 flex items-start justify-start">
          <div>
            <h2 className="text-white text-lg sm:text-xl md:text-4xl font-bold mb-2">Did You Know?</h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-lg mb-2 md:mb-4">The average salary is</p>
            <div className="mb-1 md:mb-2">
              <span className="text-yellow-300 text-3xl sm:text-4xl md:text-5xl font-bold">{salary}L</span>
            </div>
            <p className="text-white text-sm sm:text-lg md:text-xl">/year in India</p>
          </div>
        </div>
      </div>
     <a href="#hero"> <div className='flex justify-center mt-4 items-center'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Enroll Now</button>
      </div></a>
    </div>
    
  );
};

export default DidYouKnow;
