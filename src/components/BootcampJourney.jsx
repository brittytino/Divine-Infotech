// BootcampJourney.jsx
import React from 'react';
import { useState } from 'react';
import { FaRocket, FaSmileBeam, FaRegLaughSquint, FaGrinStars, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import EnrollmentForm from './pages/EnrollmentForm';
import { useNavigate } from 'react-router-dom';

const BootcampJourney = () => {
    const navigate = useNavigate();
    function handleNavigation() {
        navigate('/contactform');
    }
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
        <div className=" py-16 md:px-32">
            
            <div className="container mx-auto px-4 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
                    {/* Left Side Text */}
                    <div className="flex flex-col justify-center md:mt-32 items-center md:items-start">
                        <div className="text-center md:text-left mb-6">
                            <h2 className="text-sm text-[#684fd7] font-medium">
                                Bootcamp Journey
                            </h2>
                            <p className="md:text-6xl text-3xl font-bold text-gray-200">
                                
                                <span className="block md:inline">It's not <br className='hidden md:block' /> just a course;</span>
                                <span className="text-blue-500  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-transparent md:mt-4 block">
                                    it's an <br className="hidden md:inline" /> experience.
                                </span>
                            </p>

                        </div>

                        <div className="md:flex gap-4 hidden">
                            <button className="mt-6 bg-pink-600  font-semibold hover:bg-transparent border-2 border-pink-600 text-white py-3 px-6 rounded-lg transition duration-300 shadow-md">
                                Enroll Now
                            </button>
                            <button onClick={handleNavigation} className="mt-6 bg-transparent border-2 border-pink-600 text-gray-200 py-3 px-6 rounded-lg transition  duration-300 hover:bg-pink-600 hover:text-white font-semibold shadow-md">
                                Request Call Back?
                            </button>
                        </div>

                    </div>

                    {/* Right Side Timeline */}
                    <div className="flex flex-col items-start">
                        <div className="relative border-l-2 border-gray-200 pl-10">
                            {/* Timeline Items */}
                            {[
                                {
                                    icon: <FaRocket className="text-xl" />,
                                    color: 'yellow-400',
                                    title: 'Master the Fundamentals!',
                                    description: 'Understand core concepts essential for every programmer.',
                                    items: [
                                        'Core programming concepts',
                                        'Problem-solving techniques',
                                        'Logical thinking and algorithm design',
                                    ],
                                },
                                {
                                    icon: <FaSmileBeam className="text-xl" />,
                                    color: 'red-400',
                                    title: 'Hands-On Projects!',
                                    description: 'Apply what you learn immediately with real-world projects.',
                                    items: [
                                        'Build practical applications',
                                        'Real-world case studies',
                                        'Portfolio-worthy projects',
                                    ],
                                },
                                {
                                    icon: <FaRegLaughSquint className="text-xl" />,
                                    color: 'green-400',
                                    title: 'Language Basics to Advanced!',
                                    description: 'Go from basic syntax to advanced problem-solving techniques across C, C++, Java, and Python.',
                                    items: [
                                        'Basic syntax and structures',
                                        'Object-oriented programming',
                                        'Data structures and algorithms',
                                    ],
                                },
                                {
                                    icon: <FaGrinStars className="text-xl" />,
                                    color: 'blue-400',
                                    title: 'All-in-One Course!',
                                    description: 'Learn the four most popular languages in one go.',
                                    items: [
                                        'Versatile skill set for multiple fields',
                                        'Opportunity for diverse career paths',
                                        'Prepare for industry demands',
                                    ],
                                },
                                {
                                    icon: <FaThumbsUp className="text-xl" />,
                                    color: 'orange-400',
                                    title: 'Career Ready!',
                                    description: 'Get equipped for job interviews with tailored training.',
                                    items: [
                                        'Interview preparation and mock sessions',
                                        'Resume building workshops',
                                        'Networking opportunities with industry experts',
                                    ],
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-md shadow-md mb-10 p-5 relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={`absolute -left-12 w-10 h-10 bg-${item.color} text-white flex items-center  justify-center rounded-full`}>
                                        {item.icon}
                                    </div>
                                    <h3 className={`font-bold text-base text-${item.color}`}>{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                                    <ul className="list-disc text-sm  list-inside mt-2 text-gray-500">
                                        {item.items.map((li, i) => (
                                            <li key={i}>{li}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3 md:hidden">
                    <button onClick={handleEnrollClick} className="mt-6  bg-pink-600  font-semibold hover:bg-transparent border-2 border-pink-600 text-white py-3 px-6 rounded-lg transition duration-300 shadow-md">
                                Enroll Now
                            </button>
                            <button className="mt-6 bg-transparent border-2 border-pink-600 text-gray-200 py-3 px-6 rounded-lg transition-all duration-300 hover:bg-pink-600 hover:text-white font-semibold shadow-md">
                                Request Call Back?
                            </button>
                    </div>
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

export default BootcampJourney;