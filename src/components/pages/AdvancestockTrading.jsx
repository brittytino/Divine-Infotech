import React, { useState } from 'react';
import { FaRegLightbulb, FaUserGraduate } from 'react-icons/fa';
import videoFile from './videos/common.mp4';
import AdvancestockTradingSyllabus from './AdvancestockTradingSyllabus';
import EnrollmentForm from './EnrollmentForm';
import courses from './coursesData';

const AdvancestockTrading = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [price, setPrice] = useState(15000); // Default price
    const [couponCode, setCouponCode] = useState('');
    const [notification, setNotification] = useState('');
    const [showComingSoonModal, setShowComingSoonModal] = useState(!courses.availability);

    const handleCouponApply = () => {
        if (couponCode === 'TRYNEW') {
            setPrice(15000 * 0.88);
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
                        <h1 className="text-4xl font-bold mb-2">Advanced Stock Trading Techniques</h1>
                        <p className="md:text-lg text-sm text-gray-300">Master the art of stock trading</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
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
                                        <p>Master advanced strategies in stock trading.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Explore algorithmic and quantitative trading techniques.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Learn risk management strategies for complex trading scenarios.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Receive personalized mentorship from industry experts.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Access exclusive resources and advanced trading tools.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course details and buttons */}
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

                <div className='md:pl-60 pl-6 flex flex-col'>
                    <button
                        onClick={handleEnrollClick}
                        className='font-medium py-3 px-6 rounded-md text-lg bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 mt-5 flex items-center transition-all duration-300'
                        style={{ width: 'fit-content' }}
                    >
                        Coming Soon ! <FaUserGraduate className="ml-2 text-lg" />
                    </button>
                    {/* <p className="text-sm text-gray-600 mt-2">3/5 students enrolled in this month's batch</p>
                    <p className="text-sm text-red-600 mt-2">HURRY UP !! Don't Miss the Chance</p> */}
                </div>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AdvancestockTradingSyllabus />
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
                                    <p>Master advanced technical analysis and charting techniques.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Understand and implement complex trading strategies like options, futures, and derivatives.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Develop skills in quantitative analysis and algorithmic trading.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Gain insights into risk management and portfolio optimization techniques.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Prepare for professional trading certifications and exams.</p>
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
                                    <p>Comprehensive video lectures and interactive quizzes.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Live trading simulations with real-time market data.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to a community forum for discussions and Q&A sessions.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>One-on-one mentoring sessions with industry experts.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Flexible learning schedule with 24/7 access to course materials.</p>
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

export default AdvancestockTrading;
