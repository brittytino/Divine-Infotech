import React, { useState } from 'react';
import { FaRegLightbulb, FaGraduationCap, FaHandsHelping, FaRegClock, FaUserGraduate } from 'react-icons/fa'; // Importing FaUserGraduate icon
import videoFile from './videos/common.mp4';
import ClassRating from '../classRating';
import AzurecloudSyllabus from './AzurecloudSyllabus'; // Assuming you have a component for Azure syllabus
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EnrollmentForm from './EnrollmentForm';

const Azurecloud = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    const { ref: introRef, inView: introInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    const { ref: highlightsRef, inView: highlightsInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [price, setPrice] = useState(7000); // Default price
    const [couponCode, setCouponCode] = useState('');
    const [notification, setNotification] = useState('');
    const courseData = {
        mostLiked: [
            { count: 350, text: 'Clear explanations' },
            { count: 312, text: 'Dedicated Mentor Support' },
            { count: 150, text: 'Project-based learning' },
        ],
        expectationsMet: [
            { label: 'Exceeded', percentage: '85%' },
            { label: 'Yes', percentage: '75%' },
            { label: 'Somewhat', percentage: '10%' },
            { label: 'Not Really', percentage: '0%' },
        ],
    };

    const handleCouponApply = () => {
        if (couponCode === 'DIVINE30') {
            setPrice(7000 * 0.7);
            setNotification('Coupon applied successfully! You got 30% discount.');
        } else if (couponCode === 'SAVE20') {
            setPrice(7000 * 0.8);
            setNotification('Coupon applied successfully! You got 20% discount.');
        } else {
            setNotification('Invalid Coupon Code');
        }
    };

    const handleEnrollClick = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h1
                            className="text-4xl font-bold mb-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                            ref={introRef}
                        >
                            Mastering Azure: Cloud Computing Excellence
                        </motion.h1>
                        <p className="md:text-lg text-sm text-gray-300">
                            Become an expert in Azure cloud computing solutions
                        </p>
                    </div>
                </header>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.h2
                        className="text-3xl font-semibold mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: highlightsInView ? 1 : 0, y: highlightsInView ? 0 : 50 }}
                        transition={{ duration: 0.6 }}
                        ref={highlightsRef}
                    >
                        Introduction
                    </motion.h2>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-5 md:gap-10">
                        <div className="relative lg:w-2/3">
                            <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                                <video
                                    controls
                                    className="absolute top-0 left-0 w-full h-full object-cover border-2 border-blue-400 rounded-md shadow-lg"
                                >
                                    <source src={videoFile} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col justify-between bg-white p-8 rounded-md shadow-lg border border-blue-400">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Course Highlights</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Comprehensive coverage of Azure services.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaGraduationCap className="text-2xl text-blue-600 mr-3" />
                                        <p>Hands-on labs and real-world projects.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaHandsHelping className="text-2xl text-blue-600 mr-3" />
                                        <p>Expert guidance on cloud architecture.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegClock className="text-2xl text-blue-600 mr-3" />
                                        <p>Practical insights into Azure deployment.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col pl-6 md:pl-60 gap-3">
                    <span className="text-xl font-semibold text-yellow-500">Fee: ₹{price}</span>
                    <span className="text-xl font-semibold">Duration: 25 days</span>
                </div>

                <div className="flex flex-col md:pl-60 pl-6 mt-5">
    <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter Coupon Code"
        className="mb-2 p-2 border rounded-md"
    />
    <button
        onClick={handleCouponApply}
        className="font-medium py-2 px-4 rounded-md text-lg bg-blue-500 text-white border border-blue-500 hover:border-blue-700 hover:bg-white hover:text-blue-700 transition-all duration-300"
    >
        Apply Coupon
    </button>
    {notification && (
        <div className={`mt-4 p-2 text-center ${notification.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
            {notification}
        </div>
    )}
</div>

<div className='md:pl-60 pl-6 flex flex-col'>
    <button
        onClick={handleEnrollClick}
        className='font-medium py-3 px-6 rounded-md text-lg bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 mt-5 flex items-center transition-all duration-300'
        style={{ width: 'fit-content' }}
    >
        Enroll Now <FaUserGraduate className="ml-2 text-lg" />
    </button>
    <p className="text-sm text-gray-600 mt-2">3/5 students enrolled in this month's batch</p>
</div>



                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AzurecloudSyllabus />
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center space-x-4">
                    <button
                        onClick={() => setActiveTab('learningOutcomes')}
                        className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'learningOutcomes' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                    >
                        Learning Outcomes
                    </button>
                    <button
                        onClick={() => setActiveTab('keyFeatures')}
                        className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'keyFeatures' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                    >
                        Key Features
                    </button>
                </div>

                {activeTab === 'learningOutcomes' && (
                    <motion.section
                        className="bg-gray-100 py-12 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Master Azure services and solutions.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaGraduationCap className="text-2xl text-green-600 mr-4" />
                                    <p>Deploy scalable applications on Azure.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-green-600 mr-4" />
                                    <p>Implement cloud architecture best practices.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegClock className="text-2xl text-green-600 mr-4" />
                                    <p>Optimize cloud solutions for performance and cost-efficiency.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>
                )}

                {activeTab === 'keyFeatures' && (
                    <motion.section
                        className="bg-gray-100 py-12 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>Guidance on implementing microservices with Spring Cloud.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegClock className="text-2xl text-blue-600 mr-4" />
                                    <p>Insights into performance tuning and optimization techniques.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.section>
                )}

                {/* Ratings and Review */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <ClassRating
                        courseName="Advanced Stock Trading Techniques"
                        mostLiked={courseData.mostLiked}
                        expectationsMet={courseData.expectationsMet}
                    />
                </div>
            </div>

            {isFormOpen && (
                <EnrollmentForm
                    courseName="Advanced Stock Trading Techniques"
                    price={price}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    );
};

export default Azurecloud;
