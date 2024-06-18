import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const CoursePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Our Premium Courses</h1>
        <p className="text-xl mt-4">Learn from the best instructors and enhance your skills</p>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card Example */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Course Image" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Course Title</h2>
              <p className="text-gray-700 mb-4">Brief course description goes here. This should be enticing and informative.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">$99.99</span>
                <button className="bg-blue-600 text-white py-2 px-4 rounded">Enroll Now</button>
              </div>
            </div>
          </div>
          {/* Repeat Course Cards as needed */}
        </div>
      </section>

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ Item */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">What is the duration of the courses?</h3>
              <p className="text-gray-700">Our courses vary in length but are designed to be comprehensive and flexible, allowing you to learn at your own pace.</p>
            </div>
            {/* Repeat FAQ Items as needed */}
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">Follow us on social media</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-800" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoursePage;
