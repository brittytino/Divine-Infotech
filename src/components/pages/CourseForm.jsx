import React from 'react';

const CourseForm = ({ courseName, coursePrice }) => {
  return (
    <div id='enroll' className="relative bg-white text-black shadow-lg p-6 w-full rounded-md">
      
      {/* Premium Course Label */}
      <h1 className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2  bg-[#ff354d] font-medium text-white text-center p-2 rounded-md">
        Premium Course
      </h1>

      <h3 className="text-2xl font-semibold mb-6 text-center pt-6">Get this Course @ {coursePrice}</h3>

      <form className="space-y-4 ">
        {/* Course Name (Non-editable Input) */}
        <div>
          <label className="block text-gray-700">Course Name</label>
          <input
            type="text"
            value={courseName}
            className="w-full px-4 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700">Email ID</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Enroll Now
        </button>
      </form>

      {/* Enrollment Count */}
      <div className='bg-[#e6f7e9] text-center rounded-md mt-2 w-full flex items-center justify-center'>
        <p className="text-base bg-[#e6f7e9] text-center p-2 font-medium text-blue-600">
          <i>💙 12300+ enrolled in this course</i>
        </p>
      </div>
    </div>
  );
};

export default CourseForm;
