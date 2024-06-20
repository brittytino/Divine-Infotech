import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaCode, FaLaptopCode, FaMobileAlt, FaPalette, FaRegEdit, FaStar, FaCheck } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import videoFile from './videos/MERN.mp4';
import ClassRating from '../classRating';
import FrontendSyllabus from './FrontendSyllabus';

const FrontendEssentials = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

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
            { label: 'Not Really', percentage: '1%' },
        ],
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="md:text-4xl text-2xl font-bold mb-2">Frontend Development Essentials</h1>
                        <p className="md:text-lg text-sm text-gray-300">Become a proficient frontend developer</p>
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
                        <div className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col justify-between bg-white p-8 rounded-md shadow-lg border border-blue-400">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Course Highlights</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <FaHtml5 className="text-2xl text-blue-600 mr-3" />
                                        <p>Master HTML from basics to advanced topics.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaCss3Alt className="text-2xl text-blue-600 mr-3" />
                                        <p>Learn CSS and responsive web design.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaJsSquare className="text-2xl text-blue-600 mr-3" />
                                        <p>Build interactive web pages using JavaScript.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaRegEdit className="text-2xl text-blue-600 mr-3" />
                                        <p>Work on real-world projects to build your portfolio.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaLaptopCode className="text-2xl text-blue-600 mr-3" />
                                        <p>Get 24x7 mentor support and guidance.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col gap-3 justify-center items-center">
                    <span className="text-xl font-semibold text-yellow-500">Fee: ₹5,500</span>
                    <span className="text-xl font-semibold">Duration: 30 days</span>
                </div>

                <div className='  flex flex-col items-center justify-center'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'>
                        <button className='font-medium py-2 px-4 rounded-md text-2xl bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button>
                    </a>
                    <button className=' font-medium hover:underline hover:underline-offset-4 hover:decoration-blue-500 py-2 px-4 rounded-md text-base transition-all text-blue-500 mt-5 hover:text-blue-700 '>Contact Us?</button>

                </div>


                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <FrontendSyllabus />
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
                            <h2 className="md:text-3xl text-xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start text-sm md:text-base ">
                                    <FaHtml5 className="text-2xl text-red-600 mr-4" />
                                    <p>Understand and use HTML for creating structured web content.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaCss3Alt className="text-2xl text-blue-600 mr-4" />
                                    <p>Develop stylesheets and responsive designs with CSS.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaJsSquare className="text-2xl text-yellow-600 mr-4" />
                                    <p>Build dynamic and interactive web pages using JavaScript.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaMobileAlt className="text-2xl text-teal-600 mr-4" />
                                    <p>Implement responsive design for mobile-first web applications.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaCode className="text-2xl text-gray-800 mr-4" />
                                    <p>Write clean and maintainable code using best practices.</p>
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
                                <li className="flex items-start text-sm md:text-base">
                                    <FaRegEdit className="md:text-2xl text-xl text-blue-600 mr-4" />
                                    <p>Hands-on projects to build your portfolio.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaPalette className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive coverage of frontend design and development.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaMobileAlt className="text-2xl text-blue-600 mr-4" />
                                    <p>In-depth tutorials on creating responsive web applications.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaLaptopCode className="text-2xl text-blue-600 mr-4" />
                                    <p>Guidance on industry best practices and coding standards.</p>
                                </li>
                                <li className="flex items-start text-sm md:text-base">
                                    <FaEnvelope className="text-2xl text-blue-600 mr-4" />
                                    <p>24x7 mentor support for all your queries and doubts.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}



                {/* Class Rating */}
                <ClassRating mostLiked={courseData.mostLiked} expectationsMet={courseData.expectationsMet} />
               
            </div>
        </div>
    );
};

export default FrontendEssentials;
