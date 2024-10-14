import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HeroImg from '../images/codemaster Hero.png';
import Breadcrumb from './Breadcrumb';
import EnrollmentForm from './pages/EnrollmentForm';

const CodemasterHero = () => {
    const navigate = useNavigate();
    function handleNavigation() {
        navigate('/contactform');
    }

  const [isLoaded, setIsLoaded] = useState(false);

  const [showForm, setShowForm] = useState(false); // Control form popup visibility
  const [courseDetails, setCourseDetails] = useState({
      courseName: 'Codemaster Bootcamp',
      price: 4999,
      appliedCoupon: 'TRYNEW', // You can set coupon logic later if needed
  });
  const handleEnrollClick = () => {
      setShowForm(true); // Show the form when Enroll Now button is clicked
  };

  const handleCloseForm = () => {
      setShowForm(false); // Hide the form on close
  };

  // Trigger animation after component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to simulate smooth loading
  }, []);

  const breadcrumbItems = [
    { label: "Divine Infotech", isActive: false, link: '/' },
    { label: "Courses", isActive: false, link: '/courses' },
    { label: "Codemaster Bootcamp", isActive: true, link: '#' },
  ];

  return (
    <section className="relative text-white py-6 md:py-16 px-4 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} marginX=" px-4 lg:px-16" />

      {/* Container */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4 lg:px-16">

        {/* Left Content */}
        <div
          className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            <span className="block">Master Programming with</span>
            <span className="text-yellow-300 mt-2 block">CodeMaster Bootcamp</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-light mb-6">
            Learn <span className="font-semibold text-yellow-300">C, C++, Java, Python</span> from scratch and become a programming hero. Build real-world projects and get job-ready!
          </p>

          {/* Call to Action Buttons for Desktop */}
          <div className="hidden lg:flex justify-center md:justify-start gap-4 text-sm md:text-base lg:text-lg">
          <button  onClick={handleEnrollClick} className="bg-orange-500 hover:bg-orange-600 py-3 px-3 md:py-3 md:px-6 rounded-3xl font-semibold transition-all duration-300 flex items-center gap-2">
              Enroll Now <FaArrowRight />
            </button>
            <button onClick={handleNavigation} className="bg-transparent border-2  border-yellow-500 text-yellow-500 hover:bg-yellow-300 hover:text-gray-900 py-2 px-2 md:py-3 md:px-6 rounded-3xl font-semibold transition-all duration-300">
              Attend Guidance Call (FREE)
            </button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div
          className={`md:w-1/2 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <img
            src={HeroImg}
            alt="CodeMaster Bootcamp"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Call to Action Buttons for Mobile */}
      <div
        className={`lg:hidden flex justify-center gap-4 mt-6 text-sm md:text-base lg:text-lg transition-all duration-1000 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
         <button  onClick={handleEnrollClick} className="bg-orange-500 hover:bg-orange-600 py-3 px-3 md:py-3 md:px-6 rounded-3xl font-semibold transition-all duration-300 flex items-center gap-2">
              Enroll Now <FaArrowRight />
            </button>
            <button className="bg-transparent border-2  border-yellow-500 text-yellow-500 hover:bg-yellow-300 hover:text-gray-900 py-2 px-2 md:py-3 md:px-6 rounded-3xl font-semibold transition-all duration-300">
              Attend Guidance Call (FREE)
            </button>
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
    </section>
  );
};

export default CodemasterHero;
