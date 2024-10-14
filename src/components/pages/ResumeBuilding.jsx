import React, { useState, useEffect } from 'react';
import ResumeBuildingSection from "../ResumeHero"; 
import resumePain from './img/resume-pain.jpg';
import hiredImg from './img/youre-hired.png';
import EnrollmentForm from './EnrollmentForm';  // Import the form component
import ComboCTA from './ComboCTA';

const ResumeBuildingPage = () => {
  const [showForm, setShowForm] = useState(false); // Control form popup visibility
  const [courseDetails, setCourseDetails] = useState({
    courseName: 'Resume Building Course',
    price: 1499,
    appliedCoupon: '', // You can set coupon logic later if needed
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  const handleEnrollClick = () => {
    setShowForm(true); // Show the form when Enroll Now button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form on close
  };

  return (
    <div>
      <ResumeBuildingSection />
      <div className="bg-gray-50 text-black py-8 md:px-12 lg:px-24">
        {/* Top Section - Hook */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-5xl px-2 font-bold text-blue-600 mb-2">
            Struggling to Land Interviews? 📄👎
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
            Transform your resume and unlock opportunities – <span className=' text-yellow-500 font-medium'>Just ₹1499!</span> 
          </p>
        </div>

        {/* Pain Section - Image + Content */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white mb-10">
          {/* Text Content */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Are You Tired of Sending Resumes and <span className='text-red-600'>Never Hearing Back?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Recruiters spend just <span className="font-bold text-red-600">6 seconds</span> reviewing resumes. 
              <span className="font-bold text-red-600"> Is yours leaving a lasting impression?</span>
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              It's time to <span className="font-bold text-red-600">stand out</span> – give recruiters a reason to 
              stop and take notice! 
            </p>
            <button
              onClick={handleEnrollClick} // Open form on click
              className="inline-block bg-yellow-500 text-black py-3 px-6 mt-6 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Start Building Your Resume Now!
            </button>
          </div>

          {/* Image Section */}
          <img
            src={resumePain}
            alt="Resume Pain"
            className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6"
          />
        </div>

        {/* Render Enrollment Form */}
        {showForm && (
          <EnrollmentForm 
            courseName={courseDetails.courseName}
            price={courseDetails.price}
            appliedCoupon={courseDetails.appliedCoupon}
            onClose={handleCloseForm}
          />
        )}
      </div>
      <ComboCTA/>
    </div>
  );
};

export default ResumeBuildingPage;
