import React from 'react';
import sampleImage from '../images/web illustration.png';


const WebDesignSection = () => {
  return (
    <div className="bg-green-50  py-16 px-8 grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex justify-center">
        <img src={sampleImage} alt="Web Design" className="w-full md:w-3/4 lg:w-2/3" />
      </div>
      <div className="text-left">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Web Development & Design</h2>
        <p className="text-xs md:text-base text-gray-700 mb-6">
          At Divine Infotech, we specialize in crafting user-friendly websites that cater to businesses of all sizes. 
          Our team ensures that your website is optimized for both desktop and mobile devices, providing a seamless 
          experience for potential customers browsing on-the-go. We employ cutting-edge SEO techniques to boost your 
          website’s visibility on search engine results pages (SERPs), helping you attract organic traffic and increase 
          conversions. Whether you’re a brick and mortar store looking to expand your online presence or a university 
          in need of a modern website, we’ve got you covered.
        </p>
       <a href="/contact"><button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-transparent transition-all border-2 hover:border-black hover:text-black ">
          Get a Quote →
        </button></a> 
      </div>
    </div>
  );
};

export default WebDesignSection;
