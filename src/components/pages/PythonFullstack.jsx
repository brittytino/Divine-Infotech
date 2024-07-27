import React, { useState } from 'react';
import { FaPython, FaProjectDiagram, FaDatabase, FaUserGraduate, FaCloud, FaGithub, FaTasks, FaRegLightbulb, FaGraduationCap, FaHandsHelping, FaRegClock, FaFolderOpen } from 'react-icons/fa';
import videoFile from './videos/python-fullstack.mp4';

import PythonSyllabus from './PythonSyllabus';
import EnrollmentForm from './EnrollmentForm';
import { Helmet } from 'react-helmet';

import CourseTestimonial from './CourseTestimonial';

const PythonFullstack = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [price, setPrice] = useState(12000); // Default price
    const [couponCode, setCouponCode] = useState('');
    const [notification, setNotification] = useState('');
    const courseTitle = 'Complete Full Stack Development'



    const coupons = {
        TRYNEW: 0.08, // 8% discount
        trynew: 0.08, // 8% discount
        VAGAYARA2024: 0.16, // 16% discount
        vagayara2024:0.16 ,
    };
    

    const handleCouponApply = () => {
        const discount = coupons[couponCode.toUpperCase()];

        if (discount) {
            setPrice(12000 * (1 - discount));
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
        <div>
            <Helmet>
                <title>Python Full Stack Development - Divine Infotech</title>
                <meta name="description" content="Enroll in our Python Full Stack Development course at Divine Infotech. Learn from experts in Python programming, web development, and complete your journey with hands-on projects. Ideal for those looking to master full stack development with Python." />
                <meta name="keywords" content="Python Full Stack Development, Full Stack Python Course, Python Web Development, Learn Python, Web Development with Python, Divine Infotech Courses" />
            </Helmet>

            <div className="bg-gray-200 text-gray-900">
                <div className="bg-gray-50 text-gray-900">
                    {/* Header Section */}
                    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-bold mb-2">Python Full-Stack</h1>
                            <p className="text-lg">Become a proficient Python Full-stack developer</p>
                        </div>
                    </header>

                    {/* video section  */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4">
                            <div className="relative lg:w-2/3">
                                <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                                    <video controls className="absolute top-0 left-0 w-full h-full object-cover border-2 md:border-4 border-blue-500 rounded-md shadow-lg">
                                        <source src={videoFile} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:w-1/3 bg-white p-6 rounded-md shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>
                                <ul className="space-y-2 text-gray-800">
                                    <li className="flex items-start">
                                        <FaRegLightbulb className="text-xl text-blue-600 mr-3" />
                                        <p>Master Python from basics to advanced topics.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaGraduationCap className="text-xl text-blue-600 mr-3" />
                                        <p>Learn both front-end and back-end development.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaFolderOpen className="text-xl text-blue-600 mr-3" />
                                        <p>Work on real-world projects to build your portfolio.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaHandsHelping className="text-xl text-blue-600 mr-3" />
                                        <p>Get 24x7 mentor support and guidance.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegClock className="text-xl text-blue-600 mr-3" />
                                        <p>Access comprehensive course materials and resources.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col pl-6 md:pl-60 gap-3">
                        <span className="text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-lg shadow-md w-fit">
                            Fee: <span className='text-yellow-400'>₹{price}</span>
                        </span>
                        <span className="text-xl md:text-2xl font-semibold text-gray-800">
                            Duration: <span className="text-blue-600">30 days</span>
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
                        <PythonSyllabus />
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
                                <h2 className="text-3xl font-semibold mb-6">Learning Outcomes</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <FaPython className="text-2xl text-blue-600 mr-4" />
                                        <p>Understand the fundamentals of Python programming and its core concepts.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaDatabase className="text-2xl text-yellow-600 mr-4" />
                                        <p>Manage databases using SQLite and SQLAlchemy.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaCloud className="text-2xl text-teal-600 mr-4" />
                                        <p>Implement RESTful APIs using Flask for backend communication.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaGithub className="text-2xl text-gray-800 mr-4" />
                                        <p>Utilize version control with Git and collaborate on projects using GitHub.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaProjectDiagram className="text-2xl text-purple-600 mr-4" />
                                        <p>Develop full-stack web applications with Flask and deploy them to the cloud.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* Key Features Section */}
                    {activeTab === 'keyFeatures' && (
                        <section className="bg-gray-100 py-12 transition-all">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <FaTasks className="text-2xl text-blue-600 mr-4" />
                                        <p>Real-world projects to build your portfolio.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaTasks className="text-2xl text-blue-600 mr-4" />
                                        <p>Comprehensive modules covering both front-end and back-end development with Python.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaTasks className="text-2xl text-blue-600 mr-4" />
                                        <p>In-depth tutorials on deploying web applications to cloud servers.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaTasks className="text-2xl text-blue-600 mr-4" />
                                        <p>Guidance on industry best practices and coding standards.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaTasks className="text-2xl text-blue-600 mr-4" />
                                        <p>Access to a community of learners and professional mentors.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    )}



                    <CourseTestimonial />

                    {isFormOpen && (
                        <EnrollmentForm onClose={handleCloseForm} courseName={courseTitle} price={price} appliedCoupon={couponCode} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PythonFullstack;
