import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import comboImg from './img/comboImg.png';
import EnrollmentForm from './EnrollmentForm'; // Importing the form component

const ComboCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showForm, setShowForm] = useState(false);

  const courseDetails = {
    courseName: "Combo Resume + LinkedIn Mastery",
    price: "2000",
    appliedCoupon: "SAVE498", // Sample coupon
  };

  const handleEnrollClick = () => {
    setShowForm(true); // Show the form when Enroll Now button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form on close
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row items-center lg:space-x-12"
      >
        {/* Image on the Left */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <img 
            src={comboImg} 
            alt="Resume + LinkedIn Mastery" 
            className="shadow-md rounded-xl w-full"
          />
        </motion.div>

        {/* Text Content on the Right */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-4">
            Resume Building + LinkedIn Mastery
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold text-blue-500">“Want to Stand Out Both On Paper and Online?”</span> 🚀
            Get our Resume Building + LinkedIn Mastery Combo Course for only ₹2000! Save ₹498 Today!
          </p>
          <p className="text-gray-600 mb-4">
            Stop letting opportunities slip by. With this combo, you'll craft a resume that grabs attention and build a LinkedIn profile that attracts recruiters.
          </p>
          <p className="font-semibold text-blue-500 mb-6">
            For just ₹2000, less than the cost of a single dinner outing!
          </p>
          <h1 className=' text-lg font-medium bg-gray-100 p-2 rounded-md text-center mb-2'>🥳Enroll and save <span className='text-red-600 font-semibold'>₹498 /-</span>  👇</h1>
         <div className='justify-center items-center'>
          <button 
            onClick={handleEnrollClick} 
            className="inline-block bg-red-600 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-lg hover:bg-transparent border border-red-600 hover:text-red-600 transition-all"
          >
           Enroll Now
          </button></div>
        </div>
      </motion.div>

      {/* Render Enrollment Form */}
      {showForm && (
        <div className="mt-12">
          <EnrollmentForm 
            courseName={courseDetails.courseName}
            price={courseDetails.price}
            appliedCoupon={courseDetails.appliedCoupon}
            onClose={handleCloseForm}
          />
        </div>
      )}
    </section>
  );
};

export default ComboCTA;
