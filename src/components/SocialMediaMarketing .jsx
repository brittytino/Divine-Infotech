import React from 'react';
import { FaLinkedin, FaGoogle, FaInstagram } from 'react-icons/fa';

const SocialMediaMarketing = () => {
  return (
    <div className="bg-green-50 py-8 md:py-16 px-4 md:px-8">
      <div className="text-left mb-8 md:mb-12 px-2 lg:px-20">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">Social Media Marketing</h2>
        <hr className="border-green-600 border-t-2 w-20 md:w-40 my-4" />
        <p className="text-base md:text-xl text-gray-600 mt-4 md:mt-6">
          In today’s digital world, social media isn’t just about sharing photos and updates; it’s a powerful tool for businesses to connect with their audience. Our social media marketing services are designed to elevate your brand’s presence across platforms like Facebook, Instagram, Twitter, and LinkedIn.
        </p>
        <p className="text-base md:text-xl text-gray-600 mt-4 md:mt-6">
          We craft engaging content, run targeted ad campaigns, and interact with your audience to build meaningful relationships and drive results. From increasing brand awareness to generating leads and boosting sales, we harness the full potential of social media to help your business thrive in the online landscape. Let’s make your brand shine in the digital spotlight together!
        </p>
      </div>
      <div className="flex flex-row justify-center text-center px-4  items-center md:items-stretch gap-4 md:gap-8 mt-4 md:mt-8 md:px-8">
        <div className="flex flex-col items-center  ">
          <FaLinkedin className="text-4xl md:text-5xl text-blue-700 mb-2" />
          <p className="text-sm md:text-base font-semibold">LinkedIn</p>
          <p className="text-xs md:text-sm text-gray-600">9000+ Followers</p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <FaGoogle className="text-5xl text-red-500 mb-2" />
          <p className="text-sm md:text-base font-semibold">Review</p>
          <p className="text-xs md:text-sm text-gray-600">Rated 4.6/5 500+ Reviews</p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <FaInstagram className="text-5xl text-pink-600 mb-2" />
          <p className="text-sm md:text-base font-semibold">Instagram</p>
          <p className="text-xs md:text-sm text-gray-600">10,000+ Followers</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
