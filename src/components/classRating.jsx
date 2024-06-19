// ClassRating.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ClassRating = ({ mostLiked, expectationsMet }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold mb-6">Class Rating</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#ffffff] p-6 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Most Liked</h3>
          <ul className="space-y-4">
            {mostLiked.map((item, index) => (
              <li key={index} className="flex items-center bg-[#f8faff] p-2">
                <FaHeart className="text-2xl text-red-500 mr-4" />
                <span className='font-medium flex items-center'>
                  <span className="mr-4">{item.count}</span>
                  <span>{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 shadow-xl rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Expectation Met?</h3>
          <ul className="space-y-4 font-medium">
            {expectationsMet.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1/4">{item.label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 ml-4">
                  <div className="bg-yellow-500 h-4 rounded-full" style={{ width: item.percentage }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassRating;
