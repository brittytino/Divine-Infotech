import React from 'react';
import sampleImage from '../images/web illustration.png';


const WebDesignSection = () => {
  return (
    <div className="bg-white  py-16 px-8 md:px-12 lg:px-32 grid grid-cols-1 lg:grid-cols-2 items-center">
     
      <div className="text-left lg:pl-24">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Web Development & Design</h2>
        <p className="text-xs md:text-base text-gray-700 mb-6">
        At Divine Infotech, we create user-friendly, optimized websites for businesses of all sizes. Our team ensures seamless experiences on both desktop and mobile devices, utilizing advanced SEO techniques to boost visibility and attract organic traffic. Whether you're a store expanding online or a university needing a modern website, we’ve got you covered.
        </p>
       <a href="/contact"><button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-transparent transition-all border-2 hover:border-black hover:text-black ">
          Get a Quote →
        </button></a> 
      </div>
      <div className="flex justify-center">
        <img src={sampleImage} alt="Web Design" className="w-full md:w-3/4 lg:w-2/3" />
      </div>
    </div>
  );
};

export default WebDesignSection;
