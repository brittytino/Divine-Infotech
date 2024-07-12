import React, { useState } from 'react';
import { FaRegLightbulb, FaUserGraduate } from 'react-icons/fa';
import videoFile from './videos/common.mp4';
import AdvancestockTradingSyllabus from './AdvancestockTradingSyllabus';
import EnrollmentForm from './EnrollmentForm';
import CourseTestimonial from './CourseTestimonial';

const AdvancestockTrading = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [price, setPrice] = useState(10000); // Default price
    const [couponCode, setCouponCode] = useState('');
    const [notification, setNotification] = useState('');

    const coupons = {
        TRYNEW: 0.12, // 12% discount
        trynew: 0.12, // 12% discount
        
    };
    
    const handleCouponApply = () => {
        const discount = coupons[couponCode.toUpperCase()];
    
        if (discount) {
            setPrice(10000 * (1 - discount));
            setNotification(`Coupon applied successfully! You got ${discount * 100}% discount.`);
        } else {
            setNotification('Invalid Coupon Code');
        }
    };
    

    const handleEnrollClick = () => {
 setIsFormOpen(true); // Open enrollment form
       };

    const handleCloseForm = () => {
        setIsFormOpen(false);
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

                <div className="flex flex-col pl-6 md:pl-60 gap-3">
                    <span className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg shadow-md w-fit">
                        Fee: <span className='text-yellow-400'>₹{price}</span>
                    </span>
                    <span className="text-xl md:text-2xl font-semibold text-gray-800">
                        Duration: <span className="text-blue-600">45 days</span>
                    </span>
                </div>


                <div className="flex flex-col md:pl-60 pl-6 mt-5">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter Coupon Code"
                        className="mb-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        onClick={handleCouponApply}
                        className="font-medium py-2 px-4 rounded-md text-lg bg-blue-700 text-white border border-blue-700 transition-all hover:bg-white hover:text-blue-700 hover:shadow-md"
                    >
                        Apply Coupon
                    </button>
                    {notification && (
                        <div className={`mt-4 p-2 text-center rounded-md ${notification.includes('Invalid') ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'} shadow-sm`}>
                            {notification}
                        </div>
                    )}
                </div>

                <div className='md:pl-60 pl-6 flex flex-col'>
                    <button
                        onClick={handleEnrollClick}
                        className='font-medium py-3 px-6 rounded-md text-lg bg-blue-800 text-white border border-blue-800 transition-all hover:bg-white hover:text-blue-800 hover:shadow-md mt-5 flex items-center'
                        style={{ width: 'fit-content' }}
                    >
                        Enroll Now <FaUserGraduate className="ml-2 text-lg" />
                    </button>
                    <p className="text-sm text-gray-700 mt-2">2/5 students enrolled in this batch</p>
                    <p className="text-sm text-red-600 mt-2 font-semibold">HURRY UP! Only 3 slots available.</p>
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
                                    <p>Interactive live trading sessions with real-time market simulations.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to premium trading tools and proprietary trading algorithms.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>One-on-one mentoring and personalized feedback sessions.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}
</div>
<CourseTestimonial />

{isFormOpen && (
    <EnrollmentForm onClose={handleCloseForm} courseName="Advanced Stock Trading Techniques" price={price} appliedCoupon={couponCode} />
)}
</div>
                           
                           
                        
               
        
    );
};

export default AdvancestockTrading;
