import React, { useState } from 'react';
import { FaRegLightbulb, FaUserGraduate } from 'react-icons/fa';
import videoFile from './videos/common.mp4';
import AzurecloudSyllabus from './AzurecloudSyllabus';
import EnrollmentForm from './EnrollmentForm';
import { motion } from 'framer-motion';
import courses from './coursesData';
import { useInView } from 'react-intersection-observer';

const Azurecloud = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [price, setPrice] = useState(12000); // Default price
    const [couponCode, setCouponCode] = useState('');
    const [notification, setNotification] = useState('');
    const [showComingSoonModal, setShowComingSoonModal] = useState(!courses.availability);

    const { ref: introRef, inView: introInView } = useInView();
    const { ref: highlightsRef, inView: highlightsInView } = useInView();

    const handleCouponApply = () => {
        if (couponCode === 'TRYNEW') {
            setPrice(12000 * 0.88);
            setNotification('Coupon applied successfully! You got 12% discount.');
        } else {
            setNotification('Invalid Coupon Code');
        }
    };

    const handleEnrollClick = () => {
        if (courses.availability) {
            setIsFormOpen(true); // Open enrollment form
        } else {
            setShowComingSoonModal(true); // Show coming soon modal
        }
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    const handleCloseModal = () => {
        setShowComingSoonModal(false);
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
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

                {/* Video Section */}
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
                                <video controls className="absolute top-0 left-0 w-full h-full object-cover border-2 border-blue-400 rounded-md shadow-lg">
                                    <source src={videoFile} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Course Highlights */}
                        <div className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col justify-between bg-white p-8 rounded-md shadow-lg border border-blue-400">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Course Highlights</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Comprehensive coverage of Azure services.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Hands-on labs and real-world projects.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Expert guidance on cloud architecture.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
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
                        className="font-medium py-2 px-4 rounded-md text-lg bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700"
                    >
                        Apply Coupon
                    </button>
                    {notification && (
                        <div className={`mt-4 p-2 text-center ${notification.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
                            {notification}
                        </div>
                    )}
                </div>

                <div className="md:pl-60 pl-6 flex flex-col">
                    <button
                        onClick={handleEnrollClick}
                        className="font-medium py-3 px-6 rounded-md text-lg bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 mt-5 flex items-center transition-all duration-300"
                        style={{ width: 'fit-content' }}
                    >
                        Coming Soon ! <FaUserGraduate className="ml-2 text-lg" />
                    </button>
                </div>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AzurecloudSyllabus />
                </section>

                {/* Dynamic content */}
                {/* Buttons for switching content */}
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

                {/* Learning Outcomes Section */}
                {activeTab === 'learningOutcomes' && (
                    <section className="bg-gray-100 py-12 transition-all">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive coverage of Azure services.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Hands-on labs and real-world projects.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Expert guidance on cloud architecture.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Practical insights into Azure deployment.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Key Features Section */}
                {activeTab === 'keyFeatures' && (
                    <section className="bg-gray-100 py-12 transition-all">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>High-quality course materials.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Live sessions with industry experts.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>24/7 access to course content.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Certification upon completion.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                 {/* Conditional Rendering for Enrollment Form and Coming Soon Modal */}
                 {courses.availability ? (
                    // If course is available, render EnrollmentForm when isFormOpen is true
                    isFormOpen && (
                        <EnrollmentForm onClose={handleCloseForm} courseName="Advanced Stock Trading Techniques" price={price} appliedCoupon={couponCode} />
                    )
                ) : (
                    // If course is not available, render Coming Soon Modal when showComingSoonModal is true
                    showComingSoonModal && (
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg p-8 max-w-md text-center">
                                <h2 className="text-3xl font-semibold mb-4">Course Coming Soon</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    This course will be available soon. Until then, check the syllabus and explore our other available courses.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={handleCloseModal}
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium transition-all"
                                    >
                                        Check Syllabus
                                    </button>
                                    <button
                                        onClick={() => window.location.href = '/courses'} // Replace with actual link
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md font-medium transition-all"
                                    >
                                        Check Other Courses
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Azurecloud;
