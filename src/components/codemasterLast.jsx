import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import EnrollmentForm from './pages/EnrollmentForm';

const LimitedOffer = () => {
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

    
  return (
    <div id='code-footer' className="  text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <hr className='py-8' />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Fear and Motivation Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            Are you ready to be the one who can <span className="text-yellow-400">solve coding problems</span> and build programs instead of just watching others do it?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Seats are limited – don’t miss out on this opportunity to transform your future.
          </p>
        </motion.div>

        {/* Exclusive Offer Section */}
        <motion.div
          className="md:w-1/2 bg-white text-gray-900 p-4 md:p-8 rounded-lg shadow-2xl relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-red-500 rounded-lg p-2 text-white text-center mb-4">
            Exclusive Limited-Time Offer
          </h3>
          <p className="text-base md:text-lg text-center mb-6">
            The world is moving forward, and programming is no longer optional. Don’t get left behind!
          </p>
          <p className="text-lg text-center font-semibold mb-8">
            Join the <span className="text-blue-600">CodeMaster Bootcamp</span> and be the hero of your own story. For just <span className="text-green-600">₹4999</span>, go from clueless to confident and unlock endless opportunities.
          </p>
          <div className="text-center">
            <a
             onClick={handleEnrollClick} 
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-2 md:px-8  rounded-full inline-block transition duration-300"
            >
              👉 Reserve Your Spot Now and Become a CodeMaster!
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative  text-white">
        
        <div className="container  text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black p-5 px-0 rounded-lg shadow-lg relative"
          >
           
              {/* <h3 className="text-4xl text-red-600 font-extrabold mb-4">
                Your Future Is at Risk!
              </h3> */}
              
           
            <p className="text-lg mt-2 text-gray-300">Every second wasted is a missed opportunity!</p>
            {/* Urgency and Course Price */}
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-300">Limited-Time Offer: Just <span className='text-yellow-500'> <span className=' line-through text-red-500'>₹7999</span> ₹4999</span></p>
              <p className="text-sm text-gray-100">Enroll now before the price goes up!</p>
              <p className="text-sm text-gray-400 mt-8"> ~ Invest in your future, not in the endless scroll of social media. ~ </p>

            </div>
          </motion.div>
        </div>
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
  );
};

export default LimitedOffer;
